import { Menu, Search, UserRound } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeaderWeather } from './HeaderWeather'
import { useAuth } from '../../../providers/auth'

export const Header = () => {
	const searchInputRef = useRef<HTMLInputElement>(null)
	const [currentTime, setCurrentTime] = useState(new Date())
	const { pathname } = useLocation()
	const { session } = useAuth()

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

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date())
		}, 300000)

		return () => clearInterval(timer)
	}, [])

	return (
		<header>
			<div className='wrapper'>
				<div className='flex h-14 w-full justify-between border-b border-gray-400'>
					<div className='flex'>
						<div className='flex h-14 w-[125px] items-center gap-4 border-r border-gray-400'>
							<Menu className='cursor-pointer' size={24} color='#BCBFC2' />
							<h2 className='font-extrabold'>Страницы</h2>
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
								placeholder='Поиск'
								autoFocus
								maxLength={72}
							/>
						</div>
					</div>
					<div className='flex justify-between gap-24'>
						<div className='flex items-end gap-2'>
							<img src='../../../../public/mini-icon.png' alt='mini-icon.png' className='border-gray-400 object-cover' />
							<div className='mb-1 flex flex-col justify-center'>
								<p className='text-[12px] font-extrabold text-[#262D33]'>Подпишитесь</p>
								<p className='text-[12px] text-gray-400'>3 месяца за ₽1000</p>
							</div>
						</div>
						{session.isLogin ? (
							<Link to={'/profile'} className='flex w-[68px] items-center justify-center gap-2'>
								Профиль
							</Link>
						) : pathname === '/' ? (
							<Link to={'/login'} className='flex w-[68px] items-center justify-center gap-2'>
								<UserRound />
								<p>Войти</p>
							</Link>
						) : (
							<Link to={'/'} className='flex w-[68px] items-center justify-center gap-2'>
								<p>Главная</p>
							</Link>
						)}
					</div>
				</div>
				<div className='flex h-[82px] justify-between'>
					<div className='flex items-center gap-4'>
						<img src='../../../../public/liberty.png' alt='liberty.png' className='object-cover' />
						<h2 className='font-medium'>Уфа переносит события</h2>
					</div>
					<Link to={'/'} className='flex items-center justify-center'>
						<h1 className='text-[36px] font-extrabold text-[#262D33]'>Universal</h1>
					</Link>
					<div className='flex items-center gap-[74px]'>
						{currentTime.toLocaleDateString('ru-RU', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
						<HeaderWeather />
					</div>
				</div>
			</div>
			<div className='h-[55px] bg-[#262D33]' />
		</header>
	)
}
