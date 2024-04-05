import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { CurrentWeather, ToggleTemp } from './components'

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

    // useEffect(() => {
    //     if(coords){
    //         const url = `https://api.openweathermap.org/data/2.5/weather`
            
    //         const params = new URLSearchParams()
    //         params.append('lat', coords.lat)
    //         params.append('lon', coords.lon)
    //         params.append('appid', import.meta.env.VITE_OPEN_WEATHER_API_KEY)
            
    //         axios.get(url, { params })
    //             .then(({ data }) => setCurrentWeather(data))
    //             .catch( console.log )
    //     }
    // }, [coords])

    useEffect(() => {
        if(coords){
            const url = `https://api.openweathermap.org/data/2.5/weather`
            
            const params = new URLSearchParams()
            params.append('q', 'tlapa de comonfort, mx')
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
            <div className="main-container">
                <header className="header">
                    <ToggleTemp
                        value={ true }
                        onChange={ console.log }
                    />
                </header>     
                <main className="main">
                    week
                </main>
            </div>
        </div>
    )
}

export default App
