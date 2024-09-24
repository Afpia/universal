type AxiosRequestConfig<Params = undefined, Data = undefined> = Params extends undefined
	? {
			data?: Data
			config?: import('axios').AxiosRequestConfig
		}
	: {
			params: Params
			data?: Data
			config?: import('axios').AxiosRequestConfig
		}

interface Post {
	id: number
	title: string
	shortText: string
	date: string
}

type PostsResponse = Post[]
