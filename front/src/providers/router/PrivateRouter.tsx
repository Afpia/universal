import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/ROUTES'
import { useAuth } from '../auth'

export const PrivateRouter = () => {
	const { session } = useAuth()

	return session.isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
