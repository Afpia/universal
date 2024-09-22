import { useQuery, useQueryClient } from 'react-query'
import { api } from '../../utils/api/instance'
import { ThumbsUp } from 'lucide-react'
import clsx from 'clsx'

type Comments = {
	id: number
	text: string
	likes: number
	like: boolean
}

export const Comments = ({ idPost }: { idPost: string | undefined }) => {
	const queryClient = useQueryClient()
	const { isLoading, error, data } = useQuery<Comments[]>('Comments', () => api.get(`comments/${idPost}`).then(res => res.data))

	// const data = [
	// 	{
	// 		id: 1,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae optio tenetur suscipit esse, alias quidem corporis cupiditate adipisci ex architecto tempora voluptates, voluptate totam eligendi repellat inventore provident. Dolorum?',
	// 		likes: 3,
	// 		like: false
	// 	},
	// 	{
	// 		id: 1,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae optio tenetur suscipit esse, alias quidem corporis cupiditate adipisci ex architecto tempora voluptates, voluptate totam eligendi repellat inventore provident. Dolorum?',
	// 		likes: 3,
	// 		like: true
	// 	}
	// ]

	const addLike = (id: number) => {
		try {
			queryClient.fetchQuery('AddLike', async () => {
				await api.post(`comments/${id}/like`)
			})
			console.log('done')
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
						<p className='mb-4 min-h-[100px] text-[16px] font-bold text-[#fff]'>{comment.text}</p>
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
