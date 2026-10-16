import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '@/store/gameStore'
import { supabase } from '@/lib/supabase'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const { setUser } = useGameStore()

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session?.user) {
        setUser({ id: data.session.user.id, email: data.session.user.email! })
        navigate('/dashboard')
      } else {
        navigate('/login')
      }
    }

    checkSession()
  }, [navigate, setUser])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚽</div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Projeto Manager</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>Gerencie seu time de futebol com estratégia e paixão</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => navigate('/login')} className="btn btn-primary">Entrar</button>
        <button onClick={() => navigate('/cadastro')} className="btn btn-secondary">Criar conta</button>
      </div>
    </div>
  )
}