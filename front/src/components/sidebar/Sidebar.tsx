import { useQuery } from 'react-query'
import { api } from '../../utils/api/instance'
import clsx from 'clsx'

type Category = {
	id: number
	title: string
}

interface SidebarProps {
	categories: string | null
	setCategories: React.Dispatch<React.SetStateAction<string | null>>
}

export const Sidebar = ({ categories, setCategories }: SidebarProps) => {
	const { isLoading, error, data } = useQuery('Categories', () => api.get(`/categories`).then(res => res.data))

	// const data = [
	// 	{
	// 		id: 1,
	// 		title: 'Category 1'
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Category 2'
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Category 3'
	// 	}
	// ]

	return (
		<>
			<div className='w-[80px]'>
				{isLoading ? (
					<p className='flex h-full items-center justify-center text-[14px] font-bold'>Загрузка категорий...</p>
				) : error ? (
					<p className='flex h-full items-center justify-center text-[14px] font-bold'>Ошибка получения данных</p>
				) : (
					''
				)}
			</div>
			<div className='flex flex-col gap-4'>
				{data && (
					<>
						<p className={clsx('cursor-pointer', { 'text-[#4592FF]': categories === null })} onClick={() => setCategories(null)}>
							All
						</p>
						{data.map((category: Category) => (
							<p
								key={category.id}
								onClick={() => setCategories(category.title)}
								className={clsx('cursor-pointer', { 'text-[#4592FF]': categories === category.title })}
							>
								{category.title}
							</p>
						))}
					</>
				)}
			</div>
		</>
	)
}
