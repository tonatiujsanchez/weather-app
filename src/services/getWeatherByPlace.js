import axios from 'axios'

export const getWeatherByPlace = async(place = 'tlapa de comonfort', country = 'mx') => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather`
            
    const params = new URLSearchParams()
    params.append('q', `${place }, ${ country }`)
    params.append('appid', import.meta.env.VITE_OPEN_WEATHER_API_KEY)
    
    try {
        const { data } = await axios.get(url, { params })
        return {
            hasError: false,
            data
        }
    } catch (error) {
        console.log(error)
        return {
            hasError: true,
            data: null
        }
    }
    
}
