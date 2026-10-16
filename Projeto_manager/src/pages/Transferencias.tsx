import React from 'react'
import { Card } from '@/components/ui'
import { RefreshCw } from 'lucide-react'

export const Transferencias: React.FC = () => {
  return (
    <div className="page">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Transferências</h1>
        <p style={{ color: '#64748b' }}>Mercado de transferências do clube</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
          <RefreshCw size={16} />
          Mercado de transferências em desenvolvimento.
        </div>
        <div className="empty-state" style={{ padding: '2rem' }}>
          <p style={{ color: '#64748b' }}>Em breve: comprar e vender jogadores.</p>
        </div>
      </div>
    </div>
  )
}