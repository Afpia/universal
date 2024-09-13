import { ErrorMessage, Formik } from 'formik'
import { api } from './utils/api/instance'
import { useState } from 'react'

function App() {
	const [serverErrors, setServerErrors] = useState({})

	return (
		<>
			<h1 className='mb-6'>Тестовая форма</h1>
			<Formik
				initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
				validate={values => {
					const errors = {}
					if (!values.email) {
						errors.email = 'Required'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					api
						.get('/sanctum/csrf-cookie')
						.then(response => {
							api
								.post('/api/register', {
									name: values.name,
									email: values.email,
									password: values.password,
									password_confirmation: values.password_confirmation
								})
								.then(response => {
									console.log(response.data)
									setSubmitting(false)
								})
								.catch(error => {
									if (error.response && error.response.data.errors) {
										setServerErrors(error.response.data.errors)
									}
									setSubmitting(false)
								})
						})
						.catch(error => {
							console.error(error)
							setSubmitting(false)
						})
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit} className='m-auto flex w-[300px] flex-col gap-3'>
						<input type='text' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} className='h-8' />
						{serverErrors.name && <div className='error'>{serverErrors.name[0]}</div>}
						<ErrorMessage name='name' component='div' />

						<input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className='h-8' />
						{serverErrors.email && <div className='error'>{serverErrors.email[0]}</div>}
						<ErrorMessage name='email' component='div' />

						<input
							type='password'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							className='h-8'
						/>
						{serverErrors.password && <div className='error'>{serverErrors.password[0]}</div>}
						<ErrorMessage name='password' component='div' />

						<input
							type='password'
							name='password_confirmation'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password_confirmation}
							className='h-8'
						/>
						<ErrorMessage name='password_confirmation' component='div' />

						<button type='submit' disabled={isSubmitting}>
							Отправить
						</button>
					</form>
				)}
			</Formik>
		</>
	)
}

export default App
