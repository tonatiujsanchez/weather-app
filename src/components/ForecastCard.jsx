import PropTypes from 'prop-types'
import { dateFormatDayAndMonth, kelvinToCelsius, kelvinToFahrenheit } from '../utils'
import './styles/forecastCard.css'


export const ForecastCard = ({ forecast, city, isCel }) => {

    const { dt_txt, weather, main } = forecast

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
        <article className="forecast-card">
            <p className="forecast-card__date"> { dateFormatDayAndMonth( dt_txt ) }</p>
            <div>
                <figure className="forecast-card__icon">
                    <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt="Weather icon" />
                </figure>
                <p className="forecast-card__temp">{ temp }</p>
            </div>
            <div className="forecast-card__minmax">
                <p><strong>{ tempMin }</strong> Min</p>
                <p><strong>{ tempMax }</strong> Max</p>
            </div>
            <p className="forecast-card__description">{`${ weather[0].description }`}</p>
            <h4 className="forecast-card__place">{ city.name }, { city.country }</h4>
        </article>
    )
}


ForecastCard.propTypes = {
    forecast: PropTypes.object,
    city: PropTypes.object,
    isCel: PropTypes.bool,
}