import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { CurrentWeather, Form } from './components'
// import { getWeatherByPlace } from './services'

function App() {

    const [coords, setCoords] = useState()
    const [currentWeather, setCurrentWeather] = useState()

    const success = ({ coords }) => {
        const userLocation = {
            lat: coords.latitude,
            lon: coords.longitude,
        }
        setCoords(userLocation)
    }
    
    const error = () => {
        console.log('Hubicaciòn no autorizada')
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])

    useEffect(() => {
        if(coords){
            const url = `https://api.openweathermap.org/data/2.5/weather`
            
            const params = new URLSearchParams()
            params.append('lat', coords.lat)
            params.append('lon', coords.lon)
            params.append('appid', import.meta.env.VITE_OPEN_WEATHER_API_KEY)
            
            axios.get(url, { params })
                .then(({ data }) => setCurrentWeather(data))
                .catch( console.log )
        }
    }, [coords])



    return (
        <div className="content">
            <aside className="aside">
                {   
                    currentWeather && (
                        <CurrentWeather currentWeather={ currentWeather } />
                    )
                }
            </aside>
            <main className="main">
                <Form setCurrentWeather={ setCurrentWeather } />
            </main>
        </div>
    )
}

export default App
