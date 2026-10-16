export interface Match {
  id: string
  homeTeamId: string
  awayTeamId: string
  homeScore: number | null
  awayScore: number | null
  status: 'SCHEDULED' | 'LIVE' | 'FINISHED' | 'POSTPONED'
  matchday: number
  leagueId: string
  date: string
  createdAt: string
}

export interface MatchResult {
  homeTeamId: string
  awayTeamId: string
  homeScore: number
  awayScore: number
  matchday: number
  leagueId: string
}