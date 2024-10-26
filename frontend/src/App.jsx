import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Usuarios from './pages/Usuarios'
import Alunos from './pages/Alunos'
import AlunoForm from "./components/forms/AlunoForm"
import Fornecedores from './pages/Fornecedores'
import FornecedorForm from "./components/forms/FornecedorForm"
import Pagamentos from './pages/Pagamentos2'
import Recebimentos from './pages/Recebimentos'


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />
        <Route
          path="/alunos"
          element={
            <ProtectedRoute>
              <Alunos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aluno/novo"
          element={
            <ProtectedRoute>
              <AlunoForm />
            </ProtectedRoute>
          }
        />
        <Route path="/aluno/editar/:id"        element={
            <ProtectedRoute>
              <AlunoForm />
            </ProtectedRoute>
          } />
        <Route
          path="/fornecedores"
          element={
            <ProtectedRoute>
              <Fornecedores />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fornecedor/novo"
          element={
            <ProtectedRoute>
              <FornecedorForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fornecedor/editar/:id"
          element={
            <ProtectedRoute>
              <FornecedorForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pagamentos"
          element={
            <ProtectedRoute>
              <Pagamentos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recebimentos"
          element={
            <ProtectedRoute>
              <Recebimentos />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
