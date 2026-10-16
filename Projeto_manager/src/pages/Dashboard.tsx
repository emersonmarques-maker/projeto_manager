import React from 'react'
import { Card, Button } from '@/components/ui'
import { Trophy, Users, Calendar, TrendingUp } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'

const statCards = [
  { title: 'Jogadores', value: '0', icon: Users, color: '#2563eb' },
  { title: 'Ligas', value: '20', icon: Trophy, color: '#16a34a' },
  { title: 'Partidas', value: '0', icon: Calendar, color: '#ca8a04' },
  { title: 'Saldo', value: 'R$ 0', icon: TrendingUp, color: '#7c3aed' },
]

export const Dashboard: React.FC = () => {
  const { user } = useGameStore()

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '0.5rem' }}>Dashboard</h1>
          <p style={{ color: '#64748b' }}>Bem-vindo de volta, {user?.email || 'Usuário'}</p>
        </div>
        <Button variant="secondary" onClick={() => {}}>
          Atualizar Dados
        </Button>
      </div>

      <div className="grid" style={{ marginBottom: '2rem' }}>
        {statCards.map((stat) => (
          <Card key={stat.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 40, height: 40, background: `${stat.color}1a`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>
                <stat.icon size={20} />
              </div>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{stat.title}</span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{stat.value}</div>
          </Card>
        ))}
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Resumo Rápido</h3>
        <p style={{ color: '#64748b' }}>Selecione uma opção no menu lateral para começar a gerenciar seu clube.</p>
      </div>
    </div>
  )
}