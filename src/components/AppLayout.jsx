import { Link, NavLink, Outlet } from 'react-router-dom'

function AppLayout() {
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
            <NavLink to="/login">Masuk</NavLink>
            <NavLink to="/register">Daftar</NavLink>
          </nav>
        </div>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
