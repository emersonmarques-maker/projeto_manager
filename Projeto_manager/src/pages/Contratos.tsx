import React from 'react'
import { Card } from '@/components/ui'
import { FileText } from 'lucide-react'

export const Contratos: React.FC = () => {
  return (
    <div className="page">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Contratos</h1>
        <p style={{ color: '#64748b' }}>Gerencie contratos e salários dos jogadores</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
          <FileText size={16} />
          Gerenciamento de contratos em desenvolvimento.
        </div>
        <div className="empty-state" style={{ padding: '2rem' }}>
          <p style={{ color: '#64748b' }}>Em breve: renovações, rescisões e salários.</p>
        </div>
      </div>
    </div>
  )
}