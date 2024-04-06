
export const getForecastDayUnique = (forecastArr) => {

    const newForecastArr = {}

    forecastArr.forEach( forecast => {
        const date = forecast.dt_txt.split(' ')[0]

        if(!newForecastArr[date]){
            newForecastArr[date] = forecast
        }
    })

    return Object.values(newForecastArr)
}
