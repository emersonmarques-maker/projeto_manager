import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '@/store/gameStore'
import { 
  Home, 
  Users, 
  Calendar, 
  Trophy, 
  SlidersHorizontal, 
  RefreshCw, 
  TrendingUp,
  Settings,
  LogOut
} from 'lucide-react'

const navItems = [
  { name: 'Início', icon: Home, path: '/' },
  { name: 'Elenco', icon: Users, path: '/elenco' },
  { name: 'Ligas', icon: Trophy, path: '/ligas' },
  { name: 'Partidas', icon: Calendar, path: '/partidas' },
  { name: 'Classificação', icon: TrendingUp, path: '/classificacao' },
  { name: 'Táticas', icon: SlidersHorizontal, path: '/taticas' },
  { name: 'Transferências', icon: RefreshCw, path: '/transferencias' },
  { name: 'Contratos', icon: Users, path: '/contratos' },
  { name: 'Finanças', icon: TrendingUp, path: '/financas' },
]

export const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const { sidebarOpen, toggleSidebar } = useGameStore()

  if (!sidebarOpen) return null

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2563eb' }}>Projeto Manager</h2>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = window.location.pathname === item.path
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              {item.name}
            </button>
          )
        })}
      </nav>
      <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
        <button onClick={toggleSidebar} className="nav-item" style={{ color: '#dc2626' }}>
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  )
}