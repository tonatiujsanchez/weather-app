import { useEffect, useState } from 'react'
import { CurrentWeather, ForecastCard, Form, Modal } from './components'
import { getWeatherByCoords } from './services'
import './App.css'
import { getForecastDayUnique } from './utils'

function App() {

    const [coords, setCoords] = useState()
    const [currentWeather, setCurrentWeather] = useState()
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
                        <section>
                            {
                                getForecastDayUnique(currentWeather.forecast.list).map(( forecast )=> {
                                    return <ForecastCard key={ forecast.dt_txt }  forecast={ forecast } />
                                })
                            }
                        </section>
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
