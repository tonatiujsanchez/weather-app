
export const getForecastDayUnique = ( forecastArr ) => {

    const forecastObj = {}

    forecastArr.forEach( forecast => {
        const date = forecast.dt_txt.split(' ')[0]

        if(!forecastObj[date]){
            forecastObj[date] = forecast
        }
    })

    const newForecastArr = Object.values(forecastObj)

    return newForecastArr
}
