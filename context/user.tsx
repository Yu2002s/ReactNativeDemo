import {createContext, useContext} from 'react'

export type UserState = {
  isLoading: boolean
  isSignout: boolean
  token?: string | null
  signIn: (data: string) => void
  signUp: (data: string) => void
  signOut: () => void
}

export const UserContext = createContext<UserState>({
  isLoading: true,
  isSignout: false,
  token: null,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
})

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
