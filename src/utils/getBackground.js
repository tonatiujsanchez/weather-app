

export const getBackground = (weatherId) => {

    if (weatherId >= 200 && weatherId <= 250) {
        // thunder
        return '/img/thunder.webp'
    }

    if (weatherId >= 300 && weatherId <= 350) {
        // rainy-4
        return '/img/rainy-4.webp'
    }

    if (weatherId >= 500 && weatherId <= 550) {
        // rainy-7
        return '/img/rainy-7.webp'
    }

    if (weatherId == 600) {
        // snowwy-4
        return '/img/snowwy-4.webp'
    }

    if (weatherId == 601) {
        // snowwy-5
        return '/img/snowwy-4.webp'
    }

    if (weatherId > 601 && weatherId <= 650) {
        // snowwy-6
        return '/img/snowwy-6.webp'
    }

    if (weatherId == 800) {
        // day
        return '/img/bg-default.webp'
    }

    if (weatherId == 801) {
        // cloudy-day-1
        return '/img/cloudy-day-1.webp'
    }

    if (weatherId == 802) {
        // cloudy-day-2
        return '/img/cloudy-day-1.webp'
    }

    if (weatherId > 802) {
        // cloudy-day-3
        return '/img/cloudy-day-1.webp'
    }

    return '/img/day.webp'
}