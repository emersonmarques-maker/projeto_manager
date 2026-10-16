export interface League {
  id: string
  name: string
  country: string
  tier: number
  teams: Team[]
  createdAt: string
}

export interface Team {
  id: string
  name: string
  abbreviation: string
  leagueId: string
  coach: string | null
  budget: number
  createdAt: string
}

export interface LeagueTableRow {
  teamId: string
  teamName: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  position: number
}