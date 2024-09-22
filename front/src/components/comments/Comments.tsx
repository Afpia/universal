import { useQuery } from 'react-query'
import { api } from '../../utils/api/instance'

type Comments = {
	id: number
	text: string
}

export const Comments = ({ idPost }: { idPost: string | undefined }) => {
	const { isLoading, error, data } = useQuery<Comments[]>('Comments', () => api.get(`comments/${idPost}`).then(res => res.data))

	// const data = [
	// 	{
	// 		id: 1,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae optio tenetur suscipit esse, alias quidem corporis cupiditate adipisci ex architecto tempora voluptates, voluptate totam eligendi repellat inventore provident. Dolorum?'
	// 	},
	// 	{
	// 		id: 1,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae optio tenetur suscipit esse, alias quidem corporis cupiditate adipisci ex architecto tempora voluptates, voluptate totam eligendi repellat inventore provident. Dolorum?'
	// 	}
	// ]

	return (
		<>
			{/* <div className='wrapper'>
				{isLoading ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Загрузка поста...</p>
				) : error ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Ошибка получения данных</p>
				) : (
					''
				)}
			</div> */}
			{data &&
				data.map((comment: Comments) => (
					<div key={comment.id} className='h-fit w-[250px] rounded bg-[#262D33] p-2 outline-none'>
						<p className='min-h-[100px] text-[16px] font-bold text-[#fff]'>{comment.text}</p>
					</div>
				))}
		</>
	)
}
