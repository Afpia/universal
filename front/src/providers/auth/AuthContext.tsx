import { createContext } from 'react'
import { AuthProviderState } from './types'

const initialState: AuthProviderState = {
	session: {
		isLogin: false,
		id: '',
		name: '',
		email: ''
	},
	setSession: () => null
}

export const AuthContext = createContext<AuthProviderState>(initialState)
