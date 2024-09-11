import { ErrorMessage, Formik } from 'formik'
import { api } from './utils/api/instance'

function App() {
	return (
		<>
			<h1 className='mb-6'>Тестовая форма</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					console.log(values)
				}}
				onSubmit={(values, { setSubmitting }) => {
					api
						.get('/sanctum/csrf-cookie')
						.then(response => {
							console.log(response.data)
							api
								.post('/api/your-route', {
									email: values.email,
									password: values.password,
									_token: response.data
								})
								.then(response => {
									console.log(response.data)
									setSubmitting(false)
								})
								.catch(error => {
									console.error(error)
									setSubmitting(false)
								})
						})
						.catch(error => {
							console.error(error)
						})
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit} className='m-auto flex w-[300px] flex-col gap-3'>
						<input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className='h-8' />
						<ErrorMessage name='email' component='div' />
						<input
							type='password'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							className='h-8'
						/>
						<ErrorMessage name='password' component='div' />
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
