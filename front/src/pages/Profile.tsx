import { ErrorMessage, Formik, FormikProps, FormikValues } from 'formik'
import { useRef, useState } from 'react'
import { useAuth } from '../providers/auth'
import clsx from 'clsx'
import { useQueryClient } from 'react-query'
import { api } from '../utils/api/instance'
import { AxiosError } from 'axios'
import { SessionField } from '../providers/auth/types'
import { SignupScheme } from '../utils/helpers/SignupScheme'
import { Link } from 'react-router-dom'

export const Profile = () => {
	const { session, setSession } = useAuth()
	const queryClient = useQueryClient()
	const [active, setActive] = useState(true)
	const formikRef = useRef<FormikProps<FormikValues>>(null)

	const handleCancel = () => {
		setActive(!active)
		if (formikRef.current) {
			formikRef.current.resetForm()
		}
	}

	return (
		<div className='mb-20 mt-40 flex flex-col items-center justify-center'>
			<div className='mb-6 flex items-baseline gap-2'>
				<h1 className='text-center text-[40px] font-bold'>Profile</h1>
				<p className={clsx('w-[90px] cursor-pointer', { 'text-[#4592FF]': active })} onClick={handleCancel}>
					{active ? 'Изменить' : 'Отменить'}
				</p>
			</div>
			<Formik
				innerRef={formikRef}
				initialValues={{ nickname: '', email: '', password: '' }}
				validationSchema={SignupScheme}
				onSubmit={async (values, { setSubmitting, setFieldError }) => {
					try {
						const data = await queryClient.fetchQuery<SessionField>('UpdateProfile', async () => {
							const response = await api.post('/updateProfile', {
								nickname: values.nickname,
								email: values.email,
								password: values.password
							})
							return response.data
						})
						console.log(data)
						setSession({
							isLogin: true,
							id: data.id,
							name: values.name,
							email: values.email
						})
						setSubmitting(false)
					} catch (error) {
						console.error(error)
						if (error instanceof AxiosError) {
							if (error.status === 511) {
								setFieldError('email', 'This email does not exist')
							}
							if (error.status === 512) {
								setFieldError('password', 'Password incorrect')
							}
						}
						setSubmitting(false)
					}
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit} className='flex w-[300px] flex-col gap-3'>
						<input
							type='text'
							name='nickname'
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.nickname}
							placeholder={session.name}
							disabled={active || isSubmitting}
						/>
						<ErrorMessage name='nickname' component='div' />
						<input
							type='email'
							name='email'
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							placeholder={session.email}
							disabled={active || isSubmitting}
						/>
						<ErrorMessage name='email' component='div' />
						<input
							type='password'
							name='password'
							className='h-10 rounded-md bg-[#262D33] px-2 text-white outline-none'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							placeholder='Password'
							disabled={active || isSubmitting}
						/>
						<ErrorMessage name='password' component='div' />
						{!active && (
							<button
								type='submit'
								disabled={isSubmitting}
								className='mb-6 rounded-lg bg-[#4592FF] px-6 py-2 text-[14px] font-medium text-white disabled:bg-[#3B3B3B4D]'
							>
								Изменить данные
							</button>
						)}
					</form>
				)}
			</Formik>
			<Link className='mt-6 text-[15px]' to={'mypost'}>
				Создать пост
			</Link>
		</div>
	)
}
