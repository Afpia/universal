import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Router } from './providers/router/Router.tsx'
import { AuthProvider } from './providers/auth/AuthProvider.tsx'
import './assets/styles/global.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>
)
