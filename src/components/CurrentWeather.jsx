import PropTypes from 'prop-types'
import { ToggleTemp } from './ToggleTemp'
import { dateFormatLong, kelvinToCelsius, kelvinToFahrenheit } from '../utils'
import './styles/currentWeather.css'

export const CurrentWeather = ({ currentWeather, onShowFormModal, isCel, onChangeToggle }) => {
    
    const { name, sys, weather, main, wind, clouds } = currentWeather

    const temp = isCel 
        ? `${ kelvinToCelsius( main.temp ) } °C` 
        : `${ kelvinToFahrenheit ( main.temp ) } °F`

    const tempMin = isCel 
        ? `${ kelvinToCelsius( main.temp_min ) } °C` 
        : `${ kelvinToFahrenheit ( main.temp_min ) } °F`

    const tempMax = isCel 
        ? `${ kelvinToCelsius( main.temp_max ) } °C` 
        : `${ kelvinToFahrenheit ( main.temp_max ) } °F`


    return (
        <article className="current-weather">
            <h3 className="current-weather__place">{ name }, { sys.country }</h3>
            <p className="current-weather__date">Hoy { dateFormatLong( new Date() ).toLowerCase() }</p>
            <figure className="current-weather__icon">
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt="Weather icon" />
            </figure>
            <p className="current-weather__temp">{ temp }</p>
            <div className="current-weather__minmax">
                <p><strong>{ tempMin }</strong> Min</p>
                <p><strong>{ tempMax }</strong> Max</p>
            </div>
            <div className="current-weather__data">
                <p className="current-weather__description">{`${ weather[0].description }`}</p>
                <ul className="current-weather__list">
                    <li className="current-weather__item"><span>Wind Speed</span> <strong>{ wind.speed } m/s</strong></li>
                    <li className="current-weather__item"><span>Clouds</span> <strong>{ clouds.all }%</strong> </li>
                    <li className="current-weather__item"><span>Pressure</span> <strong>{ main.pressure }hPa</strong> </li>
                </ul>
            </div>
            <div className="current-weather__toggle">
                <ToggleTemp
                    value={ isCel }
                    onChange={ onChangeToggle }
                    name="toggle-temp"
                />
            </div>
            <div className="current-weather__search">
                <button
                    onClick={ onShowFormModal }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Burcar por lugar
                </button>
            </div>
        </article>
    )
}


CurrentWeather.propTypes = {
    currentWeather: PropTypes.object,
    onShowFormModal: PropTypes.func,
    isCel: PropTypes.bool,
    onChangeToggle: PropTypes.func,
}