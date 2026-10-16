export interface Contract {
  id: string
  playerId: string
  teamId: string
  wage: number
  startDate: string
  endDate: string
  status: 'ACTIVE' | 'EXPIRED' | 'TERMINATED'
  createdAt: string
}