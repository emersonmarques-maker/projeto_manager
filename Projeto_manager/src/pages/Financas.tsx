import React from 'react'
import { Card } from '@/components/ui'
import { Wallet } from 'lucide-react'

export const Financas: React.FC = () => {
  return (
    <div className="page">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Finanças</h1>
        <p style={{ color: '#64748b' }}>Orçamento, receitas e despesas do clube</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
          <Wallet size={16} />
          Dashboard financeiro em desenvolvimento.
        </div>
        <div className="empty-state" style={{ padding: '2rem' }}>
          <p style={{ color: '#64748b' }}>Em breve: saldo, receitas e despesas.</p>
        </div>
      </div>
    </div>
  )
}