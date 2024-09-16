import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export const Footer = () => (
	<footer>
		<h1 className='pb-[25px] pt-[60px] text-center font-roboto text-[40px] font-bold'>Subscribe now and get 20% off</h1>
		<div className='flex justify-center gap-3 pb-[70px]'>
			<input
				type='text'
				className='w-[300px] rounded border border-gray-400 bg-transparent px-4 py-3 outline-none'
				placeholder='Enter your email'
			/>
			<button className='w-[120px] rounded-3xl bg-[#4592FF] px-4 py-3 text-white'>Subscribe</button>
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
					<h3 className='pb-6 font-bold text-black'>News</h3>
					<div className='flex flex-col gap-4'>
						<p>Nation</p>
						<p>World</p>
						<p>Politics</p>
						<p>Solar Eclipse</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Arts</h3>
					<div className='flex flex-col gap-4'>
						<p>Nation</p>
						<p>World</p>
						<p>Politics</p>
						<p>Solar Eclipse</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Travel</h3>
					<div className='flex flex-col gap-4'>
						<p>Nation</p>
						<p>World</p>
						<p>Politics</p>
						<p>Solar Eclipse</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Sports</h3>
					<div className='flex flex-col gap-4'>
						<p>Nation</p>
						<p>World</p>
						<p>Politics</p>
						<p>Solar Eclipse</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Tech</h3>
					<div className='flex flex-col gap-4'>
						<p>Nation</p>
						<p>World</p>
						<p>Politics</p>
						<p>Solar Eclipse</p>
					</div>
				</div>
				<div className='flex w-[165px] flex-col'>
					<h3 className='pb-6 font-bold text-black'>Moneys</h3>
					<div className='flex flex-col gap-4'>
						<p>Nation</p>
						<p>World</p>
						<p>Politics</p>
						<p>Solar Eclipse</p>
					</div>
				</div>
			</div>
			<div className='mb-[30px] h-[1px] w-full bg-[#D9DADB]'></div>
			<div className='flex h-[50px] justify-between pb-[30px]'>
				<div className='flex items-center gap-7'>
					<img src='../../../../public/Logo.svg' alt='Logo.svg' />
					<p className='font-bold text-[#262D33]'>CONTACT US</p>
					<p className='font-bold text-[#262D33]'>WORK WITH US</p>
					<p className='font-bold text-[#262D33]'>ADVERTISE</p>
					<p className='font-bold text-[#262D33]'>YOUR AD CHOSE</p>
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
					Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since
					it was founded in 2015 grown into one of the world's leading fashion companies.
				</p>
				<p className='w-[220px]'>© 2019 Universal UI Kit</p>
			</div>
		</div>
	</footer>
)
