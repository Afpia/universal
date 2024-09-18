// import { FormikHelpers } from 'formik'
// import { api } from '../../utils/api/instance'
// import { SessionField } from '../../providers/auth/types'
// import { AxiosError } from 'axios'

// interface FormValues {
// 	nickname: string
// 	email: string
// 	password: string
// }

// // interface ProfileModelProps {
// //     values: FormValues,
// //     { setSubmitting, setFieldError }: FormikHelpers<FormValues>
// // }
// // type ProfileModelProps = {
// // 	values: FormValues
// // 	{ setSubmitting, setFieldError }: FormikHelpers<FormValues>
// // }

// export const ProfileModel = async (values: FormValues, { setSubmitting, setFieldError }: FormikHelpers<FormValues>) => {
// 	try {
// 		const data = await queryClient.fetchQuery<SessionField>('Login', async () => {
// 			const response = await api.post('/api/updateProfile', {
// 				nickname: values.nickname,
// 				email: values.email,
// 				password: values.password
// 			})
// 			return response.data
// 		})
// 		console.log(data)
// 		setSession({
// 			isLogin: true,
// 			userId: data.userId,
// 			userName: values.nickname,
// 			userEmail: values.email
// 		})
// 		setSubmitting(false)
// 	} catch (error) {
// 		console.error(error)
// 		if (error instanceof AxiosError) {
// 			if (error.status === 511) {
// 				setFieldError('email', 'This email does not exist')
// 			}
// 			if (error.status === 512) {
// 				setFieldError('password', 'Password incorrect')
// 			}
// 		}
// 		setSubmitting(false)
// 	}
// }
