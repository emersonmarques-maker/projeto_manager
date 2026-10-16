import React from 'react'
import { Menu, User } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'

export const Header: React.FC = () => {
  const { toggleSidebar, user } = useGameStore()

  return (
    <header className="header">
      <button 
        onClick={toggleSidebar}
        className="btn btn-secondary btn-sm"
        style={{ padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <Menu size={20} />
        Menu
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
          {user?.email || 'Visitante'}
        </div>
        <div style={{ width: 32, height: 32, background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.85rem', fontWeight: '600' }}>
          <User size={16} />
        </div>
      </div>
    </header>
  )
}