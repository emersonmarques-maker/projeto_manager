import React from 'react'
import { Card } from '@/components/ui'
import { TrendingUp } from 'lucide-react'

export const Classificacao: React.FC = () => {
  return (
    <div className="page">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Classificação</h1>
        <p style={{ color: '#64748b' }}>Tabela de posições das ligas</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
          <TrendingUp size={16} />
          Selecione uma liga para ver a classificação
        </div>
        <div className="empty-state" style={{ padding: '2rem' }}>
          <p style={{ color: '#64748b' }}>Nenhuma classificação disponível ainda.</p>
        </div>
      </div>
    </div>
  )
}