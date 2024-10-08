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

	return (
		<div className='mb-20 mt-40 flex flex-col items-center justify-center'>
			<h1 className='mb-6 text-center text-[40px] font-bold'>Войти</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSche
				ma={LoginScheme}
				onSubmit={async (values, { setSubmitting, setFieldError }) => {
					try {
						const data = await queryClient.fetchQuery<SessionField>('Login', async () => {
							const response = await api.post('/login', {
								email: values.email,
								password: values.password
							})
							return response.data
						})
						navigate('/')
						setSession({
							isLogin: true,
							id: data.id,
							name: data.name,
							email: data.email
						})
						setSubmitting(false)
					} catch (error) {
						console.error(error)
						if (error instanceof AxiosError) {
							if (error.status === 512) {
								setFieldError('password', 'неверный логин или пароль')
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
							placeholder='Пароль'
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
						/>
						<ErrorMessage name='password' component='div' />
						<button
							type='submit'
							disabled={isSubmitting}
							className='mb-6 rounded-lg bg-[#4592FF] px-6 py-2 text-[14px] font-medium text-white disabled:bg-[#3B3B3B4D]'
						>
							Войти
						</button>
					</form>
				)}
			</Formik>
			<Link to={'/signup'}>Зарегистрироваться</Link>
		</div>
	)
}
