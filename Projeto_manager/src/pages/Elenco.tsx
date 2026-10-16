import React, { useState } from 'react'
import { Card, Button } from '@/components/ui'
import { useGameStore } from '@/store/gameStore'
import { Player, PlayerFormInput } from '@/types/player'
import { Plus, Trash2, Edit2 } from 'lucide-react'

export const Elenco: React.FC = () => {
  const { players, addPlayer, updatePlayer, removePlayer, setNotification } = useGameStore()
  const [form, setForm] = useState<PlayerFormInput>({
    name: '',
    position: 'ATA',
    age: 20,
    overall: 70,
    potential: 80,
    value: 1000000,
    wage: 10000,
    contractUntil: '',
    teamId: null,
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const positions: { value: Player['position']; label: string }[] = [
    { value: 'GOL', label: 'Goleiro' },
    { value: 'LEI', label: 'Lateral' },
    { value: 'ZAG', label: 'Zagueiro' },
    { value: 'VOL', label: 'Volante' },
    { value: 'MEI', label: 'Meia' },
    { value: 'ATA', label: 'Atacante' },
  ]

  const handleSave = () => {
    const player: Player = {
      id: crypto.randomUUID(),
      name: form.name,
      position: form.position,
      age: form.age,
      overall: form.overall,
      potential: form.potential,
      value: form.value,
      wage: form.wage,
      contractUntil: form.contractUntil,
      teamId: form.teamId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    addPlayer(player)
    setNotification('Jogador adicionado com sucesso!', 'success')
    setOpen(false)
    setForm({
      name: '',
      position: 'ATA',
      age: 20,
      overall: 70,
      potential: 80,
      value: 1000000,
      wage: 10000,
      contractUntil: '',
      teamId: null,
    })
  }

  const handleUpdate = () => {
    if (!editingId) return
    updatePlayer(editingId, { ...form, updatedAt: new Date().toISOString() })
    setNotification('Jogador atualizado com sucesso!', 'success')
    setOpen(false)
    setEditingId(null)
  }

  const handleEdit = (player: Player) => {
    setEditingId(player.id)
    setForm({
      name: player.name,
      position: player.position,
      age: player.age,
      overall: player.overall,
      potential: player.potential,
      value: player.value,
      wage: player.wage,
      contractUntil: player.contractUntil,
      teamId: player.teamId,
    })
    setOpen(true)
  }

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Elenco</h1>
        <Button onClick={() => setOpen(true)} variant="primary">
          <Plus size={18} /> Adicionar Jogador
        </Button>
      </div>
      <Card>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th><th>Posição</th><th>Idade</th><th>Overall</th><th>Potencial</th><th>Valor</th><th>Salário</th><th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td><span className="badge badge-primary">{player.position}</span></td>
                <td>{player.age}</td><td>{player.overall}</td><td>{player.potential}</td>
                <td>R$ {player.value.toLocaleString()}</td><td>R$ {player.wage.toLocaleString()}</td>
                <td style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleEdit(player)} className="btn btn-secondary btn-sm"><Edit2 size={16} /></button>
                  <button onClick={() => removePlayer(player.id)} className="btn btn-danger btn-sm"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {players.length === 0 && (
              <tr><td colSpan="8" style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>Nenhum jogador cadastrado.</td></tr>
            )}
          </tbody>
        </table>
      </Card>

      {open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Card style={{ width: '100%', maxWidth: '500px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{editingId ? 'Editar Jogador' : 'Novo Jogador'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); editingId ? handleUpdate() : handleSave() }}>
              <div className="form-group">
                <label className="label">Nome</label>
                <input className="input" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="label">Posição</label>
                <select className="input" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value as Player['position'] })}>
                  {positions.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="label">Idade</label>
                <input className="input" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="label">Overall</label>
                  <input className="input" type="number" value={form.overall} onChange={(e) => setForm({ ...form, overall: Number(e.target.value) })} required />
                </div>
                <div className="form-group">
                  <label className="label">Potencial</label>
                  <input className="input" type="number" value={form.potential} onChange={(e) => setForm({ ...form, potential: Number(e.target.value) })} required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="label">Valor (R$)</label>
                  <input className="input" type="number" value={form.value} onChange={(e) => setForm({ ...form, value: Number(e.target.value) })} required />
                </div>
                <div className="form-group">
                  <label className="label">Salário (R$)</label>
                  <input className="input" type="number" value={form.wage} onChange={(e) => setForm({ ...form, wage: Number(e.target.value) })} required />
                </div>
              </div>
              <div className="form-group">
                <label className="label">Contrato até</label>
                <input className="input" type="date" value={form.contractUntil} onChange={(e) => setForm({ ...form, contractUntil: e.target.value })} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setOpen(false)} className="btn btn-secondary">Cancelar</button>
                <button type="submit" className="btn btn-primary">{editingId ? 'Atualizar' : 'Salvar'}</button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}