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

interface ShortPost {
	id: number
	title: string
	shortText: string
	date: string
}

interface Comments {
	id: number
	comment: string
	likes: number
	like: boolean
}

interface Post {
	id: number
	title: string
	text: string
	date: string
}

type PostsResponse = ShortPost[]
