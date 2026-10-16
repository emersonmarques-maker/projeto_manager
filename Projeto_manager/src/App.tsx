import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { Cadastro } from '@/pages/Cadastro'
import { Elenco } from '@/pages/Elenco'
import { Ligas } from '@/pages/Ligas'
import { Partidas } from '@/pages/Partidas'
import { Classificacao } from '@/pages/Classificacao'
import { Taticas } from '@/pages/Taticas'
import { Transferencias } from '@/pages/Transferencias'
import { Contratos } from '@/pages/Contratos'
import { Financas } from '@/pages/Financas'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return <Navigate to="/login" replace />
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          element={<Layout />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/elenco" element={<Elenco />} />
          <Route path="/ligas" element={<Ligas />} />
          <Route path="/partidas" element={<Partidas />} />
          <Route path="/classificacao" element={<Classificacao />} />
          <Route path="/taticas" element={<Taticas />} />
          <Route path="/transferencias" element={<Transferencias />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/financas" element={<Financas />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}