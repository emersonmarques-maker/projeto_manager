export type Position = 'GOL' | 'LEI' | 'ZAG' | 'VOL' | 'MEI' | 'ATA'

export interface Player {
  id: string
  name: string
  position: Position
  age: number
  overall: number
  potential: number
  value: number
  wage: number
  contractUntil: string
  teamId: string | null
  createdAt: string
  updatedAt: string
}

export interface PlayerAttributes {
  pace: number
  shooting: number
  passing: number
  dribbling: number
  defending: number
  physical: number
}

export interface PlayerFormInput {
  name: string
  position: Position
  age: number
  overall: number
  potential: number
  value: number
  wage: number
  contractUntil: string
  teamId: string | null
}