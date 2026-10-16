import React from 'react'
import { Card, Button } from '@/components/ui'
import { Trophy } from 'lucide-react'

const leagues20 = [
  { name: 'Premier League', country: 'Inglaterra', tier: 1 },
  { name: 'La Liga', country: 'Espanha', tier: 1 },
  { name: 'Bundesliga', country: 'Alemanha', tier: 1 },
  { name: 'Serie A', country: 'Itália', tier: 1 },
  { name: 'Ligue 1', country: 'França', tier: 1 },
  { name: 'Brasileirão', country: 'Brasil', tier: 1 },
  { name: 'Primeira Liga', country: 'Portugal', tier: 1 },
  { name: 'Eredivisie', country: 'Países Baixos', tier: 1 },
  { name: 'Liga Argentina', country: 'Argentina', tier: 1 },
  { name: 'Campeonato Chileno', country: 'Chile', tier: 1 },
  { name: 'MLS', country: 'Estados Unidos', tier: 1 },
  { name: 'Liga MX', country: 'México', tier: 1 },
  { name: 'J1 League', country: 'Japão', tier: 1 },
  { name: 'K League 1', country: 'Coreia do Sul', tier: 1 },
  { name: 'A-League', country: 'Austrália', tier: 1 },
  { name: 'Pro League', country: 'Arábia Saudita', tier: 1 },
  { name: 'Super Lig', country: 'Turquia', tier: 1 },
  { name: 'Premier Liga Rússia', country: 'Rússia', tier: 1 },
  { name: 'Superliga China', country: 'China', tier: 1 },
  { name: 'Campeonato Belga', country: 'Bélgica', tier: 1 },
]

export const Ligas: React.FC = () => {
  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Ligas</h1>
        <span className="badge badge-primary">20 ligas disponíveis</span>
      </div>

      <div className="grid">
        {leagues20.map((league, index) => (
          <Card key={league.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{league.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{league.country} • Nível {league.tier}</p>
              </div>
              <div style={{ width: 32, height: 32, background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700' }}>
                {index + 1}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="secondary" size="sm">Ver Times</button>
              <Button variant="secondary" size="sm">Classificação</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}