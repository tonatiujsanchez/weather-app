import { useEffect, useState } from 'react'
import { CurrentWeather, ForecastList, Form, LoadingMain, Modal } from './components'
import { getWeatherByCoords } from './services'
import { getBackground, getForecastDayUnique } from './utils'
import './App.css'

function App() {

    const [coords, setCoords] = useState()
    const [currentWeather, setCurrentWeather] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [isCel, setIsCel] = useState(true)
    const [msgLocationNotAuthorized, setMsgLocationNotAuthorized] = useState()

    const success = ({ coords }) => {
        const userLocation = {
            lat: coords.latitude,
            lon: coords.longitude,
        }
        setCoords(userLocation)
    }

    const error = () => {
        setMsgLocationNotAuthorized('Por favor, habilite el acceso a la ubicación en la configuración de su navegador o ingrese un lugar desde el formulario.')
        setIsLoading(false)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])


    const getWeather = async() => {
        
        const { data, hasError } = await getWeatherByCoords(coords)
        if(hasError){
            setIsLoading(false)
            return console.log('Hubo un error')
        }
        
        setMsgLocationNotAuthorized(undefined)
        setCurrentWeather(data)
        setIsLoading(false)
    }

    useEffect(() => {
        if (coords) {
            getWeather()
        }
    }, [coords])

    useEffect(() => {
        if( currentWeather ){
            const body = document.querySelector('body')
            body.style.backgroundImage = `url(${getBackground(currentWeather.weatherToday.weather[0].id)})` 
        }
    }, [currentWeather])
    

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
                ( showModal || msgLocationNotAuthorized ) && (
                    <Modal
                        onHiddenFormModal={onHiddenFormModal}
                    >
                        <Form 
                            setCurrentWeather={setCurrentWeather}
                            onHiddenFormModal={ onHiddenFormModal }
                            msgLocationNotAuthorized={ msgLocationNotAuthorized }
                            setMsgLocationNotAuthorized={ setMsgLocationNotAuthorized }
                            coords={ coords }
                        />
                    </Modal>
                )
            }
        </div>
    )
}

export default App
