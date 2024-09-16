export type SessionField = {
	isLogin: boolean
	userId: string
	userName: string
	userEmail: string
}

export interface AuthProviderState {
	session: SessionField
	setSession: (user: SessionField) => void
}

export interface AuthProviderProps {
	children: React.ReactNode
}
