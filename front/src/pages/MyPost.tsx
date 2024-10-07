import { useQuery } from 'react-query'
import { useAuth } from '../providers/auth'
import { Formik } from 'formik'
import { api } from '../utils/api/instance'
import { deleteMyPost, postMyPost, updateMyPost } from '../utils/api/requests'
import { useState } from 'react'
import { Check, Pen, PenOff, Trash } from 'lucide-react'

export const MyPost = () => {
	const { session } = useAuth()
	const [update, setUpdate] = useState(false)
	const [change, setChange] = useState(false)

	const { isLoading, error, data } = useQuery(['MyPost', update], () => api.get(`mypost/${session.id}`).then(res => res.data))

	const { data: dataCategory } = useQuery('Categories', () => api.get(`/categories`).then(res => res.data))

	const deletePost = async (id: number) => {
		try {
			await deleteMyPost({ params: { id } })
			setUpdate(prev => !prev)
		} catch (error) {
			console.error(error)
		}
	}

	console.log(data)

	// const data = [
	// 	{
	// 		id: 1,
	// 		title: 'title',
	// 		text: 'text',
	// 		date: 'date',
	// 		category: 'category'
	// 	},
	// 	{
	// 		id: 1,
	// 		title: 'title',
	// 		text: 'text',
	// 		date: 'date',
	// 		category: 'category'
	// 	}
	// ]

	return (
		<div className='wrapper flex justify-between'>
			<div className='mt-20'>
				<Formik
					initialValues={{ title: '', text: '', category: '1' }}
					onSubmit={async (values, { setSubmitting }) => {
						try {
							console.log(values)
							const data = await postMyPost({
								data: { title: values.title, text: values.text, user_id: session.id, category: values.category }
							}).then(res => {
								setUpdate(prev => !prev)
								return res.data
							})
							console.log(data)
							setSubmitting(false)
						} catch (error) {
							console.error(error)
							setSubmitting(false)
						}
					}}
				>
					{({ values, handleChange, handleSubmit, isSubmitting }) => (
						<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
							<input
								className='h-10 w-[250px] rounded-md bg-[#262D33] px-2 text-white outline-none'
								type='text'
								name='title'
								onChange={handleChange}
								disabled={isSubmitting}
								value={values.title}
								placeholder='Название'
							/>
							<textarea
								className='max-h-[500px] min-h-[100px] w-[250px] overflow-y-auto rounded bg-[#262D33] p-2 text-[#fff] outline-none'
								name='text'
								onChange={handleChange}
								disabled={isSubmitting}
								value={values.text}
								placeholder='Напишите текст'
							></textarea>
							<select
								className='h-[30px] w-[250px] rounded bg-[#262D33] text-white'
								name='category'
								disabled={isSubmitting}
								onChange={handleChange}
							>
								{dataCategory?.map((category: Category) => (
									<option key={category.id} value={category.id}>
										{category.title}
									</option>
								))}
							</select>
							<button
								disabled={isSubmitting}
								type='submit'
								className='w-[120px] rounded bg-[#4592FF] px-4 py-3 text-white disabled:bg-[#3B3B3B4D]'
							>
								Создать пост
							</button>
						</form>
					)}
				</Formik>
			</div>
			{isLoading ? (
				<p className='flex h-[50vh] w-[700px] items-center justify-center text-[20px] font-bold'>Загрузка моих постов...</p>
			) : error ? (
				<p className='flex h-[50vh] w-[700px] items-center justify-center text-[20px] font-bold'>Ошибка получения данных</p>
			) : (
				''
			)}
			<div className='mt-20 flex flex-col gap-4'>
				{data &&
					data.map((post: Post) => (
						<div
							className='relative flex h-full w-[700px] flex-col items-center justify-center rounded bg-[#262D33] p-2'
							key={post.id}
						>
							<Formik
								initialValues={{ title: post.title, text: post.text }}
								onSubmit={async (values, { setSubmitting }) => {
									try {
										const data = await updateMyPost({
											params: { id: post.id },
											data: { title: values.title, text: values.text, category: post.category, user_id: session.id }
										}).then(res => {
											setUpdate(prev => !prev)
											setChange(false)
											return res.data
										})
										console.log(data)
										setSubmitting(false)
									} catch (error) {
										console.error(error)
										setSubmitting(false)
									}
								}}
							>
								{({ values, handleChange, handleSubmit, isSubmitting }) => (
									<form onSubmit={handleSubmit} className='flex w-full flex-col items-center'>
										<input
											type='text'
											name='title'
											className='mb-6 w-[250px] bg-transparent text-center font-bold text-white'
											onChange={handleChange}
											disabled={isSubmitting || !change}
											value={values.title}
										/>
										<textarea
											onChange={handleChange}
											disabled={isSubmitting || !change}
											value={values.text}
											name='text'
											className='mb-4 max-h-[500px] min-h-[200px] w-full resize-none overflow-y-auto bg-transparent text-white'
										></textarea>
										<p className='font-roboto flex justify-end text-[15px] font-bold text-white'>Дата создания: {post.date}</p>
										<p className='font-roboto flex justify-end text-[15px] font-bold text-white'>{post.category}</p>
										<Trash color='white' onClick={() => deletePost(post.id)} className='absolute right-2 top-2 cursor-pointer' />
										{change && (
											<button type='submit' disabled={isSubmitting} className='absolute right-20 top-2 cursor-pointer'>
												<Check color='white' />
											</button>
										)}
										{change ? (
											<PenOff color='white' onClick={() => setChange(false)} className='absolute right-11 top-2 cursor-pointer' />
										) : (
											<Pen color='white' onClick={() => setChange(true)} className='absolute right-11 top-2 cursor-pointer' />
										)}
									</form>
								)}
							</Formik>
						</div>
					))}
			</div>
		</div>
	)
}
