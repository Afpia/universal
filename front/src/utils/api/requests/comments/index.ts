import { AxiosRequestHeaders } from 'axios'
import { api } from '../../instance'

export type GetPostsConfig = AxiosRequestHeaders

export const postComment = async (requestConfig?: GetPostsConfig) => api.post<PostsResponse>('posts/10', requestConfig?.headers)
