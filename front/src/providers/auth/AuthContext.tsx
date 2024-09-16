import { createContext } from 'react'
import { AuthProviderState } from './types'

const initialState: AuthProviderState = {
	session: {
		isLogin: false,
		userId: '',
		userName: '',
		userEmail: ''
	},
	setSession: () => null
}

export const AuthContext = createContext<AuthProviderState>(initialState)
