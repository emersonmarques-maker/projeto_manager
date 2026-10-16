import React from 'react'
import { Card } from '@/components/ui'

export const Taticas: React.FC = () => {
  return (
    <div className="page">
      <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '1rem' }}>Táticas</h1>
      <div className="card">
        <div className="empty-state" style={{ padding: '3rem' }}>
          <p style={{ color: '#64748b' }}>Sistema de táticas e escalações em desenvolvimento.</p>
        </div>
      </div>
    </div>
  )
}