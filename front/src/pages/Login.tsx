import { ErrorMessage, Formik } from 'formik'
import { api } from '../utils/api/instance'
import { Link, useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { useAuth } from '../providers/auth'
import { SessionField } from '../providers/auth/types'
import { AxiosError } from 'axios'
import { LoginScheme } from '../utils/helpers/LoginScheme'

export const Login = () => {
	const queryClient = useQueryClient()
	const { setSession } = useAuth()
	const navigate = useNavigate()

	// const login = async (values) =>
	// 	await api.post('/login', {
	// 		email: values.email,
	// 		password: values.password
	// 	})

	// const onSubmit = useMutation<SessionField, AxiosError>(login, {
	// 	onSuccess: data => {
	// 		navigate('/')
	// 		setSession({
	// 			isLogin: true,
	// 			userId: data.userId,
	// 			userName: data.userName,
	// 			userEmail: data.userEmail
	// 		})
	// 	},
	// 	onError: (error, _, { setFieldError }) => {
	// 		if (error.status === 512) {
	// 			setFieldError('password', 'Invalid login or password')
	// 		}
	// 	},
	// 	onSettled: (_, __, { setSubmitting }) => {
	// 		setSubmitting(false)
	// 	}
	// })

	return (
		<div className='mb-20 mt-40 flex flex-col items-center justify-center'>
			<h1 className='mb-6 text-center text-[40px] font-bold'>Login</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={LoginScheme}
				onSubmit={async (values, { setSubmitting, setFieldError }) => {
					// onSubmit.mutate(values, { setSubmitting, setFieldError })
					try {
						const data = await queryClient.fetchQuery<SessionField>('Login', async () => {
							const response = await api.post('/login', {
								email: values.email,
								password: values.password
							})
							return response.data
						})
						console.log(data)
						navigate('/')
						setSession({
							isLogin: true,
							userId: data.userId,
							userName: data.userName,
							userEmail: data.userEmail
						})
						setSubmitting(false)
					} catch (error) {
						console.error(error)
						if (error instanceof AxiosError) {
							if (error.status === 512) {
								setFieldError('password', 'Invalid login or password')
							}
						}
						setSubmitting(false)
					}
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit} className='flex w-[250px] flex-col gap-3'>
						<input
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							placeholder='Email'
							disabled={isSubmitting}
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
						/>
						<ErrorMessage name='email' component='div' />
						<input
							type='password'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							disabled={isSubmitting}
							placeholder='Password'
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
						/>
						<ErrorMessage name='password' component='div' />
						<button
							type='submit'
							disabled={isSubmitting}
							className='mb-6 rounded-lg bg-[#4592FF] px-6 py-2 text-[14px] font-medium text-white disabled:bg-[#3B3B3B4D]'
						>
							Login
						</button>
					</form>
				)}
			</Formik>
			<Link to={'/signup'}>Signup</Link>
		</div>
	)
}
