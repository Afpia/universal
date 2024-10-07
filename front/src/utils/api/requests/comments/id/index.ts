import { api } from '../../../instance'

export interface PostCommentParams {
	id: string
	comment: string
}

type PostCommentIdConfig = AxiosRequestConfig<{ id: string }, PostCommentParams>

export const postCommentId = async ({ params, data, config }: PostCommentIdConfig) =>
	api.post(`/posts/${params.id}/comments`, data, config)
