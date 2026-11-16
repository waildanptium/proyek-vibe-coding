import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

function LoginPage() {
  const { clearError, loading, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setErrorMessage('')
    clearError()

    try {
      await login(email, password)
      navigate('/')
    } catch (authError) {
      const message =
        authError instanceof Error
          ? authError.message
          : 'Terjadi kesalahan saat masuk.'
      setErrorMessage(`Tidak dapat masuk: ${message}`)
    }
  }

  return (
    <section className="auth-page">
      <h1>Masuk</h1>
      <p className="auth-description">Masuk untuk melihat dan mengelola tugas Anda.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="login-email">Email</label>
          <input
            autoComplete="email"
            id="login-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </div>
        <div className="auth-field">
          <label htmlFor="login-password">Password</label>
          <input
            autoComplete="current-password"
            id="login-password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
        </div>
        {errorMessage && (
          <p className="auth-message auth-message--error" role="alert">
            {errorMessage}
          </p>
        )}
        <button className="auth-submit" type="submit" disabled={loading}>
          {loading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>
      <p className="auth-switch">
        Belum punya akun? <Link to="/register">Daftar</Link>
      </p>
    </section>
  )
}

export default LoginPage
