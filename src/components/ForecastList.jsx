import PropTypes from 'prop-types'
import { ForecastCard } from './ForecastCard'
import './styles/forecastList.css'



export const ForecastList = ({ forecastList, city, isCel }) => {
    
    return (
        <section className="forecast">
            <h2 className="forecast__title">Pronóstico</h2>
            <div className="forecast-list">
                {
                    forecastList.map( forecast => (
                        <ForecastCard 
                            key={ forecast.dt_txt }  
                            forecast={ forecast }
                            city={ city }
                            isCel={ isCel }
                        />
                    ))
                }
            </div>
        </section>
    )
}


ForecastList.propTypes = {
    forecastList: PropTypes.array,
    city: PropTypes.object,
    isCel: PropTypes.bool
}