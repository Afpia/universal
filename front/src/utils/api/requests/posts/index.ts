import { api } from '../../instance'

export type GetPostsConfig = AxiosRequestConfig

export const getPosts = async (requestConfig?: GetPostsConfig) => api.get<PostsResponse>('posts/10', requestConfig)

interface AddPost {
	user_id: string
	title: string
	text: string
	category?: string
}

export type AddMyPostConfig = AxiosRequestConfig<undefined, AddPost>
export type UpdateMyPostConfig = AxiosRequestConfig<{ id: number }, AddPost>
export type DeleteMyPostConfig = AxiosRequestConfig<{ id: number }>

export const postMyPost = async ({ data, config }: AddMyPostConfig) => api.post(`/addPost`, data, config)

export const deleteMyPost = async ({ params }: DeleteMyPostConfig) => api.delete(`/posts/del/${params.id}`)

export const updateMyPost = async ({ params, data }: UpdateMyPostConfig) => api.put(`/posts/upd/${params.id}`, data)
