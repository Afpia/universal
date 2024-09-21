import { useState } from 'react'
import { AuthProviderProps, SessionField } from './types'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [session, setSession] = useState<SessionField>(
		(JSON.parse(localStorage.getItem('session') as string) as SessionField) || {
			isLogin: false,
			userId: '',
			userName: '',
			userEmail: ''
		}
	)

	const value = {
		session,
		setSession: (user: SessionField) => {
			localStorage.setItem('session', JSON.stringify(user))
			setSession(user)
		}
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
