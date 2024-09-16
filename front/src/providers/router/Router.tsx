import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '../../utils/constants/ROUTES'
import { Layout } from '../../components/layout/Layout'
import { Home, Login, NotFound, Profile, Signup } from '../../pages'
import { PrivateRouter } from './PrivateRouter'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '*',
				element: <NotFound />
			},
			{
				path: ROUTES.LOGIN,
				element: <Login />
			},
			{
				path: ROUTES.SIGNUP,
				element: <Signup />
			},
			{
				path: ROUTES.MAIN,
				element: <Home />
			},
			{
				element: <PrivateRouter />,
				children: [
					{
						path: ROUTES.PROFILE,
						element: <Profile />
					}
				]
			}
		]
	}
])
export const Router = () => <RouterProvider router={router} />
