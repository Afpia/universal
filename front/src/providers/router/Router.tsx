import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '../../utils/constants/routes'
import { Layout } from '../../components/layout/Layout'
import { Home, Login, NotFound, Signup } from '../../pages'
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
				element: <PrivateRouter />,
				children: [
					{
						path: ROUTES.MAIN,
						element: <Home />
					}
				]
			}
		]
	}
])
export const Router = () => <RouterProvider router={router} />
