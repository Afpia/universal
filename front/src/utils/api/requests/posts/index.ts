import { api } from '../../instance'

export type GetPostsConfig = AxiosRequestConfig

export const getPosts = async (requestConfig?: GetPostsConfig) => api.get<PostsResponse>('posts/10', requestConfig)

interface AddPost {
	user_id: string
	title: string
	text: string
}

export type AddMyPostConfig = AxiosRequestConfig<undefined, AddPost>
export type UpdateMyPostConfig = AxiosRequestConfig<{ id: number }, AddPost>
export type DeleteMyPostConfig = AxiosRequestConfig<{ id: number }>

export const postMyPost = async ({ data, config }: AddMyPostConfig) => api.post(`/posts/mypost`, data, config)

export const deleteMyPost = async ({ params }: DeleteMyPostConfig) => api.delete(`/posts/upd/${params.id}`)

export const updateMyPost = async ({ params, data }: UpdateMyPostConfig) => api.put(`/posts/del/${params.id}`, data)
