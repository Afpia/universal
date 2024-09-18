import { object, string } from 'yup'

export const SignupScheme = object().shape({
	nickname: string().min(5, 'Too Short!').required('Required'),
	email: string().email('Invalid email').min(2, 'Too Short!').required('Required'),
	password: string().min(6, 'Password minimum 6 characters').required('Required')
})
