import { FC } from 'react'

import { Outlet } from 'react-router-dom'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout: FC = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />
	</>
)
