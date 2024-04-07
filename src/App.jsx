import { useEffect, useState } from 'react'
import { CurrentWeather, ForecastList, Form, LoadingMain, Modal } from './components'
import { getWeatherByCoords } from './services'
import { getForecastDayUnique } from './utils'
import './App.css'

function App() {

    const [coords, setCoords] = useState()
    const [currentWeather, setCurrentWeather] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [isCel, setIsCel] = useState(true)

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


    const getWeather = async() => {
        
        const { data, hasError } = await getWeatherByCoords(coords)
        if(hasError){
            return console.log('Hubo un error')
        }
        
        setCurrentWeather(data)
        setIsLoading(false)
    }

    useEffect(() => {
        if (coords) {
            getWeather()
        }
    }, [coords])


    const onShowFormModal = () => {
        setShowModal(true)
    }
    
    const onHiddenFormModal = () => {
        setShowModal(false)
    }

    if( isLoading ){
        return (
            <div className="main-loading">
                <LoadingMain />
            </div>
        )
    }
    
    return (
        <div className="content">
            <aside className="aside">
                {
                    currentWeather && (
                        <CurrentWeather
                            currentWeather={currentWeather.weatherToday}
                            onShowFormModal={onShowFormModal}
                            isCel={isCel}
                            onChangeToggle={(value) => setIsCel(value)}
                        />
                    )
                }
            </aside>
            <main className="main">
                {
                    currentWeather && (
                        <ForecastList
                            forecastList={ getForecastDayUnique(currentWeather.forecast.list) }
                            city={ currentWeather.forecast.city }
                            isCel={ isCel }
                        />
                    )
                }
            </main>
            {
                showModal && (
                    <Modal
                        onHiddenFormModal={onHiddenFormModal}
                    >
                        <Form 
                            setCurrentWeather={setCurrentWeather}
                            onHiddenFormModal={ onHiddenFormModal }
                            coords={ coords }
                        />
                    </Modal>
                )
            }
        </div>
    )
}

export default App
