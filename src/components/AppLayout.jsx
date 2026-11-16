import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

function AppLayout() {
  const { loading, logout, user } = useAuth()
  const [logoutError, setLogoutError] = useState('')

  async function handleLogout() {
    setLogoutError('')

    try {
      await logout()
    } catch (authError) {
      const message =
        authError instanceof Error
          ? authError.message
          : 'Terjadi kesalahan saat keluar.'
      setLogoutError(`Gagal keluar: ${message}`)
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <Link className="app-brand" to="/">
            TugasKu
          </Link>
          <nav className="app-nav" aria-label="Navigasi utama">
            <NavLink to="/" end>
              Ringkasan
            </NavLink>
            <NavLink to="/tasks">Tugas</NavLink>
            {loading ? (
              <span role="status">Memuat sesi...</span>
            ) : user ? (
              <button type="button" onClick={handleLogout} disabled={loading}>
                Keluar
              </button>
            ) : (
              <>
                <NavLink to="/login">Masuk</NavLink>
                <NavLink to="/register">Daftar</NavLink>
              </>
            )}
          </nav>
        </div>
      </header>
      {logoutError && (
        <p className="app-auth-error" role="alert">
          {logoutError}
        </p>
      )}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
