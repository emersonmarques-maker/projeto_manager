import React from 'react'
import { Card, Button } from '@/components/ui'
import { Calendar } from 'lucide-react'

export const Partidas: React.FC = () => {
  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Partidas</h1>
        <Button variant="primary">
          <Calendar size={18} /> Nova Partida
        </Button>
      </div>

      <div className="card">
        <div className="empty-state">
          <Calendar size={48} style={{ marginBottom: '1rem', opacity: '0.5' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Nenhuma partida agendada</h3>
          <p style={{ color: '#64748b' }}>Calendário de partidas será exibido aqui.</p>
        </div>
      </div>
    </div>
  )
}