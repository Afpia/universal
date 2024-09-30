import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export const Footer = () => (
	<footer>
		<h1 className='pb-[25px] pt-[60px] text-center font-roboto text-[40px] font-bold'>Подпишитесь сечас и получите 20% скидку</h1>
		<div className='flex justify-center gap-3 pb-[70px]'>
			<input
				type='text'
				className='w-[300px] rounded border border-gray-400 bg-transparent px-4 py-3 outline-none'
				placeholder='Введите свой email'
			/>
			<button className='w-[120px] rounded-3xl bg-[#4592FF] px-4 py-3 text-white'>Подписаться</button>
		</div>
		<div className='wrapper'>
			<div className='flex pb-7'>
				<div className='h-[5px] w-[195px] bg-[#FF4F52]'></div>
				<div className='h-[5px] w-[195px] bg-[#AC8EE3]'></div>
				<div className='h-[5px] w-[195px] bg-[#4592FF]'></div>
				<div className='h-[5px] w-[195px] bg-[#FFA34D]'></div>
				<div className='h-[5px] w-[195px] bg-[#3DC47E]'></div>
				<div className='h-[5px] w-[195px] bg-[#6E99AE]'></div>
			</div>
			<div className='flex gap-7 pb-[65px]'>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Новости</h3>
					<div className='flex flex-col gap-4'>
						<p>Национальные</p>
						<p>В мире</p>
						<p>Политика</p>
						<p>Солнечное затмение</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Искусство</h3>
					<div className='flex flex-col gap-4'>
						<p>Национальные</p>
						<p>В мире</p>
						<p>Политика</p>
						<p>Солнечное затмение</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Путешествия</h3>
					<div className='flex flex-col gap-4'>
						<p>Национальные</p>
						<p>В мире</p>
						<p>Политика</p>
						<p>Солнечное затмение</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Спорт</h3>
					<div className='flex flex-col gap-4'>
						<p>Национальные</p>
						<p>В мире</p>
						<p>Политика</p>
						<p>Солнечное затмение</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Технологии</h3>
					<div className='flex flex-col gap-4'>
						<p>Национальные</p>
						<p>В мире</p>
						<p>Политика</p>
						<p>Солнечное затмение</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Деньги</h3>
					<div className='flex flex-col gap-4'>
						<p>Национальные</p>
						<p>В мире</p>
						<p>Политика</p>
						<p>Солнечное затмение</p>
					</div>
				</div>
			</div>
			<div className='mb-[30px] h-[1px] w-full bg-[#D9DADB]'></div>
			<div className='flex h-[50px] justify-between pb-[30px]'>
				<div className='flex items-center gap-7'>
					<img src='../../../../public/Logo.svg' alt='Logo.svg' />
					<p className='font-bold text-[#262D33]'>СВЯЖИТЕСЬ С НАМИ</p>
					<p className='font-bold text-[#262D33]'>РАБОТАЙТЕ С НАМИ</p>
					<p className='font-bold text-[#262D33]'>РЕКЛАМА</p>
					<p className='font-bold text-[#262D33]'>ВАША РЕКЛАМА</p>
				</div>
				<div className='flex items-center gap-4'>
					<div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#4267B2]'>
						<Facebook fill='white' stroke='white' strokeWidth={1} />
					</div>
					<div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1DA1F2]'>
						<Twitter fill='white' stroke='white' strokeWidth={1} />
					</div>
					<div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF0000]'>
						<Youtube fill='white' stroke='#FF0000' strokeWidth={1.3} />
					</div>
					<div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#262626]'>
						<Instagram fill='white' strokeWidth={2} stroke='#262626' />
					</div>
				</div>
			</div>
			<div className='mb-[40px] h-[1px] w-full bg-[#D9DADB]'></div>
			<div className='mb-[50px] flex justify-between gap-[200px]'>
				<p>
					Бизнес-концепция Universal заключается в том, чтобы предлагать моду и качество по лучшей цене и на основе принципов
					устойчивого развития. С тех пор Universal она была основана в 2015 году и превратилась в одну из ведущих мировых модных
					компаний.
				</p>
				<p className='w-[220px]'>© 2019 Universal UI Kit</p>
			</div>
		</div>
	</footer>
)
