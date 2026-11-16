import { useContext } from 'react'
import AuthContext from './AuthContext.js'

function useAuth() {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error('useAuth harus digunakan di dalam AuthProvider.')
  }

  return context
}

export default useAuth
