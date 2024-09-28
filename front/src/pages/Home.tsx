import { useQuery } from 'react-query'
import { api } from '../utils/api/instance'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'

type Post = {
	id: number
	title: string
	shortText: string
	date: string
}

export const Home = () => {
	const [limit, setLimit] = useState(10)
	const [categories, setCategories] = useState(null as string | null)

	const url = categories ? `posts?limit=${limit}&categories=${categories}` : `posts?limit=${limit}`

	const { isLoading, error, data } = useQuery('Posts', () => api.get(url).then(res => res.data))

	const showMore = () => {
		setLimit(prevLimit => prevLimit + 10)
	}

	// const data = [
	// 	{
	// 		id: 1,
	// 		title: 'Post 1',
	// 		shortText: 'hello',
	// 		date: 'hllo'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'Post 1',
	// 		shortText: 'hello',
	// 		date: 'hllo'
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
				<div className='flex h-full w-full bg-[#EDEFF0] pb-8 pt-8'>
					<div className='wrapper flex w-full justify-between'>
						<div className=''>
							<div className='mb-4 grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4'>
								{data.map((post: Post) => (
									<Link
										to={`/post/${post.id}`}
										key={post.id}
										className='flex h-[170px] w-[250px] flex-col rounded-md bg-white p-6'
									>
										<h2 className='pb-[5px] text-[16px] font-bold text-[#262D33]'>{post.title}</h2>
										<p className='pb-[10px]'>{post.shortText}</p>
										<p>{post.date}</p>
									</Link>
								))}
							</div>
							<div className='w-full text-center'>
								<button onClick={showMore} className='w-[120px] rounded-3xl bg-[#4592FF] px-4 py-3 text-white'>
									Show more
								</button>
							</div>
						</div>
						<Sidebar categories={categories} setCategories={setCategories} />
					</div>
				</div>
			)}
		</>
	)
}
