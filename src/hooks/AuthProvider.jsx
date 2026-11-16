import { useCallback, useEffect, useMemo, useState } from 'react'
import AuthContext from './AuthContext.js'
import {
  getSession,
  signIn,
  signOut,
  signUp,
  subscribeToAuthChanges,
} from '../services/authService.js'

function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const unsubscribe = subscribeToAuthChanges((nextSession) => {
      if (isMounted) {
        setSession(nextSession)
        setLoading(false)
      }
    })

    getSession()
      .then((currentSession) => {
        if (isMounted) {
          setSession(currentSession)
          setLoading(false)
        }
      })
      .catch((authError) => {
        if (isMounted) {
          setError(authError)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
      unsubscribe()
    }
  }, [])

  const runAuthAction = useCallback(async (action) => {
    setLoading(true)
    setError(null)

    try {
      return await action()
    } catch (authError) {
      setError(authError)
      throw authError
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(
    (email, password) => runAuthAction(() => signUp(email, password)),
    [runAuthAction],
  )
  const login = useCallback(
    (email, password) => runAuthAction(() => signIn(email, password)),
    [runAuthAction],
  )
  const logout = useCallback(
    () => runAuthAction(() => signOut()),
    [runAuthAction],
  )
  const clearError = useCallback(() => setError(null), [])

  const value = useMemo(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
      error,
      register,
      login,
      logout,
      clearError,
    }),
    [session, loading, error, register, login, logout, clearError],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
