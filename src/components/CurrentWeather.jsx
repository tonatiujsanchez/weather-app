import PropTypes from 'prop-types'
import { kelvinToCelsius } from '../utils'

export const CurrentWeather = ({ currentWeather }) => {
    
    const { name, sys, weather, main, wind, clouds } = currentWeather

    console.log(currentWeather)

    return (
        <article className="current-weather">
            <h3 className="current-weather__place">{ name }, { sys.country }</h3>
            <p className="current-weather__date">Hoy 05 de Abril de 2024</p>
            <figure className="current-weather__icon">
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt="Weather icon" />
            </figure>
            <p className="current-weather__temp"> { kelvinToCelsius( main.temp ) }°C </p>
            <div className="current-weather__minmax">
                <p><strong>{ kelvinToCelsius( main.temp_min ) }°C</strong> Min</p>
                <p><strong>{ kelvinToCelsius( main.temp_max ) }°C</strong> Max</p>
            </div>
            <div className="current-weather__data">
                <p className="current-weather__description">{`${ weather[0].description }`}</p>
                <ul className="current-weather__list">
                    <li className="current-weather__item"><span>Wind Speed</span> <strong>{ wind.speed } m/s</strong></li>
                    <li className="current-weather__item"><span>Clouds</span> <strong>{ clouds.all }%</strong> </li>
                    <li className="current-weather__item"><span>Pressure</span> <strong>{ main.pressure }hPa</strong> </li>
                </ul>
            </div>

        </article>
    )
}


CurrentWeather.propTypes = {
    currentWeather: PropTypes.object
}