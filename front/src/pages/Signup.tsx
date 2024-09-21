import { ErrorMessage, Formik } from 'formik'
import { api } from '../utils/api/instance'
import { Link } from 'react-router-dom'
import { object, string } from 'yup'

const SignupScheme = object().shape({
	nickname: string().min(5, 'Too Short!').required('Required'),
	email: string().email('Invalid email').min(2, 'Too Short!').required('Required'),
	password: string().min(6, 'Password minimum 6 characters').required('Required')
})

export const Signup = () => {
	return (
		<div className='mt-20 flex flex-col items-center justify-center'>
			<h1 className='mb-6 text-center text-[40px] font-bold'>Signup</h1>
			<Formik
				initialValues={{ nickname: '', email: '', password: '' }}
				validationSchema={SignupScheme}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						// const response = await api.get('/sanctum/csrf-cookie')
						// const csrfToken = response.data
						const request = await api.post('/api/register', {
							nickname: values.nickname,
							email: values.email,
							password: values.password
							// _token: csrfToken
						})
						console.log(request.data)
						setSubmitting(false)
					} catch (error) {
						console.error(error)
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
							placeholder='Nickname'
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
							placeholder='Password'
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
						/>
						<ErrorMessage name='password' component='div' />
						<button
							type='submit'
							disabled={isSubmitting}
							className='mb-6 rounded-lg bg-[#4592FF] px-6 py-2 text-[14px] font-medium text-white disabled:bg-[#3B3B3B4D]'
						>
							Signup
						</button>
					</form>
				)}
			</Formik>
			<Link to={'/login'}>Login</Link>
		</div>
	)
}
