import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import AuthProvider from './hooks/AuthProvider.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={
                <PlaceholderPage
                  title="Ringkasan tugas"
                  description="Ringkasan tugas akan ditampilkan di sini."
                />
              }
            />
            <Route
              path="login"
              element={<PlaceholderPage title="Masuk" />}
            />
            <Route
              path="register"
              element={<PlaceholderPage title="Daftar" />}
            />
            <Route
              path="tasks"
              element={<PlaceholderPage title="Daftar tugas" />}
            />
            <Route
              path="tasks/new"
              element={<PlaceholderPage title="Tambah tugas" />}
            />
            <Route
              path="tasks/:id/edit"
              element={<PlaceholderPage title="Ubah tugas" />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
