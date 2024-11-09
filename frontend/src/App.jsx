import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Alunos from './pages/Alunos'
import AlunoForm from "./components/forms/AlunoForm"
import Fornecedores from './pages/Fornecedores'
import FornecedorForm from "./components/forms/FornecedorForm"
import Pagamentos from './pages/Pagamentos'
import PagamentoForm from "./components/forms/PagamentoForm"
import Recebimentos from './pages/Recebimentos'
import RecebimentoForm from "./components/forms/RecebimentoForm"


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
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
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
          path="/pagamento/novo"
          element={
            <ProtectedRoute>
              <PagamentoForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pagamento/editar/:id"
          element={
            <ProtectedRoute>
              <PagamentoForm />
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
        <Route
          path="/recebimento/novo"
          element={
            <ProtectedRoute>
              <RecebimentoForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recebimento/editar/:id"
          element={
            <ProtectedRoute>
              <RecebimentoForm />
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
