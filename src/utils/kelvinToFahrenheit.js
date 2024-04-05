import { kelvinToCelsius } from './kelvinToCelsius'

export const kelvinToFahrenheit = ( temp ) => {
    return ( kelvinToCelsius(temp) * 9/5 + 32 ).toFixed(2)
}