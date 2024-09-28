import { useQuery } from 'react-query'
import { api } from '../utils/api/instance'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'
import { useAuth } from '../providers/auth'
import { Comments } from '../components/comments/Comments'
import { postCommentId } from '../utils/api/requests/comments/id'

export const Post = () => {
	const id = useParams().id!
	const { session } = useAuth()

	const { isLoading, error, data } = useQuery('Post', () => api.get(`post/${id}`).then(res => res.data))

	return (
		<>
			<div className='wrapper'>
				{isLoading ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Загрузка поста...</p>
				) : error ? (
					<p className='flex h-[50vh] items-center justify-center text-[20px] font-bold'>Ошибка получения данных</p>
				) : (
					''
				)}
			</div>
			{data && (
				<div className='mt-20 flex flex-col items-center justify-center'>
					<h2 className='mb-6 text-center text-[40px] font-bold'>{data?.title}</h2>
					<p className='mb-4 w-[800px]'>{data?.text}</p>
					<p className='mb-[50px] flex w-[800px] justify-end font-roboto text-[15px] font-bold'>Date create: {data?.date}</p>
				</div>
			)}
			<div className='wrapper flex w-[830px] justify-between'>
				{session.isLogin && (
					<>
						<Formik
							initialValues={{ comment: '' }}
							onSubmit={(values, { setSubmitting }) => {
								try {
									const data = postCommentId({
										params: { id },
										data: { comment: values.comment, id: session.id },
										config: { headers: { 'Content-Type': 'application/json' } }
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
									<textarea
										className='min-h-[100px] w-[250px] overflow-y-auto rounded bg-[#262D33] p-2 text-[#fff] outline-none'
										name='comment'
										onChange={handleChange}
										disabled={isSubmitting}
										value={values.comment}
										placeholder='Write your comment'
									></textarea>
									<button
										disabled={isSubmitting}
										type='submit'
										className='w-[120px] rounded bg-[#4592FF] px-4 py-3 text-white disabled:bg-[#3B3B3B4D]'
									>
										Send comment
									</button>
								</form>
							)}
						</Formik>
						<div className='flex flex-col gap-2'>
							<Comments idPost={id} />
						</div>
					</>
				)}
			</div>
		</>
	)
}
