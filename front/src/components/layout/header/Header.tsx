import { Menu, Search, UserRound } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
	const searchInputRef = useRef<HTMLInputElement>(null)
	const { pathname } = useLocation()

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === 'p') {
				event.preventDefault()
				searchInputRef.current?.focus()
			}
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<div className='flex h-14 w-full justify-between border-b border-gray-400'>
			<div className='flex'>
				<div className='flex h-14 w-[125px] items-center gap-4 border-r border-gray-400'>
					<Menu className='cursor-pointer' size={24} color='#BCBFC2' />
					<h2 className='font-extrabold'>Sections</h2>
				</div>
				<div className='ml-6 flex items-center gap-3'>
					<label htmlFor='search' className='cursor-pointer'>
						<Search size={20} color='#BCBFC2' />
					</label>
					<input
						ref={searchInputRef}
						type='text'
						id='search'
						className='w-[600px] bg-transparent pr-4 outline-none placeholder:text-gray-400'
						placeholder='Search'
						autoFocus
						maxLength={72}
					/>
				</div>
			</div>
			<div className='flex justify-between gap-20'>
				<div className='flex items-end gap-2'>
					<img src='../../../../public/mini-icon.png' alt='mini-icon.png' className='border-gray-400 object-cover' />
					<div className='mb-1 flex flex-col justify-center'>
						<p className='text-[12px] font-extrabold text-[#262D33]'>Subscribe Now</p>
						<p className='text-[12px] text-gray-400'>3 month for $19</p>
					</div>
				</div>
				{pathname === '/' ? (
					<Link to={'/login'} className='flex items-center gap-2'>
						<UserRound />
						<p>Log In</p>
					</Link>
				) : (
					<Link to={'/'} className='flex items-center gap-2'>
						<p>Home</p>
					</Link>
				)}
			</div>
		</div>
	)
}
