import { ErrorMessage, Formik } from 'formik'
import { api } from '../utils/api/instance'
import { Link } from 'react-router-dom'
import { object, string } from 'yup'

const LoginScheme = object().shape({
	email: string().email('Invalid email').min(2, 'Too Short!').required('Required'),
	password: string().min(6, 'Password minimum 6 characters').required('Required')
})

export const Login = () => {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<h1 className='mb-6 text-center text-[40px] font-bold'>Login</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={LoginScheme}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						const response = await api.get('/sanctum/csrf-cookie')
						const csrfToken = response.data
						const request = await api.post('/api/login', {
							email: values.email,
							password: values.password,
							_token: csrfToken
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
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							placeholder='Email'
							disabled={isSubmitting}
							className='h-8 rounded-md px-2 text-white outline-none'
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
							className='h-8 rounded-md px-2 text-white outline-none'
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
