import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://localhost:8000/api',
	withCredentials: true
})

// api.interceptors.response.use(
// 	response => response,
// 	error => {
// 		if (error.response.status === 512) {
// 			return Promise.reject(new Error('Invalid login or password'))
// 		}
// 		return Promise.reject(error)
// 	}
// )
