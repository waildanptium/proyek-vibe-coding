import { supabase } from '../lib/supabaseClient.js'

export async function getSession() {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    throw error
  }

  return data.session
}

export function subscribeToAuthChanges(onSessionChange) {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    onSessionChange(session)
  })

  return () => subscription.unsubscribe()
}

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) {
    throw error
  }

  return data
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

export async function signOut() {
  const { data, error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }

  return data
}
