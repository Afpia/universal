import axios from 'axios'
import { useQuery } from 'react-query'

export const HeaderWeather = () => {
	const API = 'ee1fb46f6fc0874deb1c66956f9625d8'
	const CITY = 'Ufa'
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}&units=metric`

	const { isLoading, error, data } = useQuery('Weather', () => axios(`${URL}`).then(res => res.data))

	if (isLoading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка получения данных</p>

	const temperature = Math.round(data.main.temp)
	const iconCode = data.weather[0].icon

	return (
		<>
			{data && (
				<div className='flex items-center gap-1'>
					<img src={`https://openweathermap.org/img/wn/${iconCode}.png`} alt='weather icon' width={25} height={25} />
					<p>{temperature} °C</p>
				</div>
			)}
		</>
	)
}
