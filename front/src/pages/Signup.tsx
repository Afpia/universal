import { ErrorMessage, Formik } from 'formik'
import { api } from '../utils/api/instance'
import { Link, useNavigate } from 'react-router-dom'
import { SignupScheme } from '../utils/helpers/SignupScheme'
import { useAuth } from '../providers/auth'
import { useQueryClient } from 'react-query'
import { SessionField } from '../providers/auth/types'
import { AxiosError } from 'axios'

export const Signup = () => {
	const queryClient = useQueryClient()
	const { setSession } = useAuth()
	const navigate = useNavigate()

	return (
		<div className='mb-20 mt-40 flex flex-col items-center justify-center'>
			<h1 className='mb-6 text-center text-[40px] font-bold'>Регистрация</h1>
			<Formik
				initialValues={{ nickname: '', email: '', password: '' }}
				validationSchema={SignupScheme}
				onSubmit={async (values, { setSubmitting, setFieldError }) => {
					try {
						const data = await queryClient.fetchQuery<SessionField>('Signup', async () => {
							const response = await api.post('/register', {
								nickname: values.nickname,
								email: values.email,
								password: values.password
							})
							return response.data
						})
						console.log(data)
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
							if (error.status === 513) {
								setFieldError('email', 'Такой email уже используется')
							}
						}
						setSubmitting(false)
					}
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit} className='flex w-[250px] flex-col gap-3'>
						<input
							type='text'
							name='nickname'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.nickname}
							placeholder='Имя'
							disabled={isSubmitting}
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
						/>
						<ErrorMessage name='nickname' component='div' />
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
							Зарегистрироваться
						</button>
					</form>
				)}
			</Formik>
			<Link to={'/login'}>Войти</Link>
		</div>
	)
}
