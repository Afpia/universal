import { AxiosRequestHeaders } from 'axios'
import { api } from '../../instance'

export type GetPostsConfig = AxiosRequestHeaders

export const getPosts = async (requestConfig?: GetPostsConfig) => api.get<PostsResponse>('posts/10', requestConfig?.headers)
