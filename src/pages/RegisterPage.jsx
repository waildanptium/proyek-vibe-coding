import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

function RegisterPage() {
  const { clearError, loading, register } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')
    clearError()

    try {
      const result = await register(email, password)

      if (result.session) {
        navigate('/')
      } else {
        setSuccessMessage(
          'Pendaftaran berhasil. Silakan periksa email Anda untuk melanjutkan.',
        )
      }
    } catch (authError) {
      const message =
        authError instanceof Error
          ? authError.message
          : 'Terjadi kesalahan saat mendaftar.'
      setErrorMessage(`Pendaftaran gagal: ${message}`)
    }
  }

  return (
    <section className="auth-page">
      <h1>Daftar</h1>
      <p className="auth-description">Buat akun untuk mulai mengelola tugas Anda.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="register-email">Email</label>
          <input
            autoComplete="email"
            id="register-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </div>
        <div className="auth-field">
          <label htmlFor="register-password">Password</label>
          <input
            autoComplete="new-password"
            id="register-password"
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
        {successMessage && (
          <p className="auth-message auth-message--success" role="status">
            {successMessage}
          </p>
        )}
        <button className="auth-submit" type="submit" disabled={loading}>
          {loading ? 'Memproses...' : 'Daftar'}
        </button>
      </form>
      <p className="auth-switch">
        Sudah punya akun? <Link to="/login">Masuk</Link>
      </p>
    </section>
  )
}

export default RegisterPage
