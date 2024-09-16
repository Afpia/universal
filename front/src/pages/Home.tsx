/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from 'react-query'
import { api } from '../utils/api/instance'
import { Link } from 'react-router-dom'

export const Home = () => {
	const { isLoading, error, data } = useQuery('Posts', () => api.get(`posts?limit=10`).then(res => res.data))

	// const data = [
	// 	{
	// 		id: 1,
	// 		title: 'hello',
	// 		description: 'hello',
	// 		createDate: 'hello'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'hello',
	// 		description: 'hello',
	// 		createDate: 'hello'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'hello',
	// 		description: 'hello',
	// 		createDate: 'hello'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'hello',
	// 		description: 'hello',
	// 		createDate: 'hello'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'hello',
	// 		description: 'hello',
	// 		createDate: 'hello'
	// 	}
	// ]

	return (
		<>
			<div className='wrapper'>
				{isLoading ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Загрузка постов...</p>
				) : error ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Ошибка получения данных</p>
				) : (
					''
				)}
			</div>
			{data && (
				<div className='h-full w-full bg-[#EDEFF0] pb-8 pt-8'>
					<div className='wrapper grid grid-flow-row grid-cols-4 gap-y-7'>
						{data.map((post: any) => (
							<Link to={`/post/${post.id}`} className='flex h-[170px] w-[260px] flex-col rounded-md bg-white p-6'>
								<h2 className='pb-[5px] text-[16px] font-bold text-[#262D33]'>{post.title}</h2>
								<p className='pb-[10px]'>{post.description}</p>
								<p>{post.createDate}</p>
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	)
}
