import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Player, League, Team, Match } from '@/types'

interface GameState {
  // Auth
  user: { id: string; email: string } | null
  setUser: (user: { id: string; email: string } | null) => void
  
  // Players
  players: Player[]
  setPlayers: (players: Player[]) => void
  addPlayer: (player: Player) => void
  updatePlayer: (id: string, data: Partial<Player>) => void
  removePlayer: (id: string) => void
  
  // Leagues
  leagues: League[]
  setLeagues: (leagues: League[]) => void
  
  // Teams
  teams: Team[]
  setTeams: (teams: Team[]) => void
  
  // Matches
  matches: Match[]
  setMatches: (matches: Match[]) => void
  addMatch: (match: Match) => void
  
  // UI
  sidebarOpen: boolean
  toggleSidebar: () => void
  notification: { message: string; type: 'success' | 'error' } | null
  setNotification: (message: string, type: 'success' | 'error') => void
  clearNotification: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      
      players: [],
      setPlayers: (players) => set({ players }),
      addPlayer: (player) => set((state) => ({ players: [...state.players, player] })),
      updatePlayer: (id, data) => set((state) => ({
        players: state.players.map((p) => (p.id === id ? { ...p, ...data } : p)),
      })),
      removePlayer: (id) => set((state) => ({
        players: state.players.filter((p) => p.id !== id),
      })),
      
      leagues: [],
      setLeagues: (leagues) => set({ leagues }),
      
      teams: [],
      setTeams: (teams) => set({ teams }),
      
      matches: [],
      setMatches: (matches) => set({ matches }),
      addMatch: (match) => set((state) => ({ matches: [...state.matches, match] })),
      
      sidebarOpen: true,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      notification: null,
      setNotification: (message, type) => set({ notification: { message, type } }),
      clearNotification: () => set({ notification: null }),
    }),
    {
      name: 'projeto-manager-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)