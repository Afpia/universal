import { useQuery, useQueryClient } from 'react-query'
import { api } from '../../utils/api/instance'
import { ThumbsUp } from 'lucide-react'
import clsx from 'clsx'
import { useAuth } from '../../providers/auth'

export const Comments = ({ idPost, dataAdd }: { idPost: string | undefined; dataAdd: Comments }) => {
	const queryClient = useQueryClient()
	const { session } = useAuth()

	const { isLoading, error, data } = useQuery<Comments[]>(['Comments', dataAdd], () =>
		api.get(`comments/${idPost}`).then(res => res.data)
	)

	const addLike = (id: number) => {
		try {
			queryClient.fetchQuery('AddLike', async () => {
				await api.post(`comments/${id}/like`, {
					user_id: session.id
				})
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<div className='wrapper'>
				{isLoading ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Загрузка комментариев...</p>
				) : error ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Ошибка получения данных</p>
				) : (
					''
				)}
			</div>
			{data &&
				data.map((comment: Comments) => (
					<div key={comment.id} className='h-fit w-[250px] rounded bg-[#262D33] p-2 outline-none'>
						<p className='mb-4 min-h-[100px] text-[16px] font-bold text-[#fff]'>{comment.comment}</p>
						<div className='flex items-center gap-3'>
							<ThumbsUp
								fill={clsx(comment.like ? 'white' : '#262D33')}
								color={clsx(comment.like ? '' : 'white')}
								className='cursor-pointer'
								onClick={() => addLike(comment.id)}
							/>
							<p className='text-[16px] text-[#fff]'>{comment.likes}</p>
						</div>
					</div>
				))}
		</>
	)
}
