import PropTypes from 'prop-types'


export const ForecastCard = ({ forecast }) => {

    console.log(forecast)
    
    return (
        <div>ForecastCard</div>
    )
}


ForecastCard.propTypes = {
    forecast: PropTypes.object,
}