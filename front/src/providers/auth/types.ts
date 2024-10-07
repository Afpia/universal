export type SessionField = {
	isLogin: boolean
	id: string
	name: string
	email: string
}

export interface AuthProviderState {
	session: SessionField
	setSession: (user: SessionField) => void
}

export interface AuthProviderProps {
	children: React.ReactNode
}
