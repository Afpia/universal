import { api } from '../../instance'

export type GetPostsConfig = AxiosRequestConfig

export const getPosts = async (requestConfig?: GetPostsConfig) => api.get<PostsResponse>('posts/10', requestConfig)
