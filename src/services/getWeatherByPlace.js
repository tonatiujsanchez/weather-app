import axios from 'axios'

export const getWeatherByPlace = async(place = 'tlapa de comonfort', country = 'mx') => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather`
    const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast'

            
    const params = new URLSearchParams()
    params.append('q', `${place }, ${ country }`)
    params.append('appid', import.meta.env.VITE_OPEN_WEATHER_API_KEY)
    
    try {
        
        const [weatherToday, forecast ] = await Promise.all([
            axios.get(url, { params }),
            axios.get(urlForecast, { params }),
        ])

        return {
            hasError: false,
            data: {
                weatherToday: weatherToday.data,
                forecast: forecast.data,
            }
        }
    } catch (error) {
        console.log(error)
        return {
            hasError: true,
            data: null
        }
    }
    
}
