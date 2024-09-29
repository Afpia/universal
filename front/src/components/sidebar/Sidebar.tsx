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

	return (
		<>
			{isLoading ? (
				<p className='flex h-full w-[80px] items-center justify-center text-[14px] font-bold'>Загрузка категорий...</p>
			) : error ? (
				<p className='flex h-full w-[80px] items-center justify-center text-[14px] font-bold'>Ошибка получения данных</p>
			) : (
				''
			)}
			<div className='flex w-[80px] flex-col flex-wrap gap-4'>
				{data && (
					<>
						<p className={clsx('cursor-pointer', { 'text-[#4592FF]': categories === null })} onClick={() => setCategories(null)}>
							All
						</p>
						{data.map((category: Category) => (
							<p
								key={category.id}
								onClick={() => setCategories(category.title)}
								className={clsx('w-[80px] cursor-pointer break-words', { 'text-[#4592FF]': categories === category.title })}
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
