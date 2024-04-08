

export const getBackground = (weatherId) => {

    if (weatherId >= 200 && weatherId <= 250) {
        // thunder
        return 'https://images.unsplash.com/photo-1587228270638-2c0ac062c01a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    if (weatherId >= 300 && weatherId <= 350) {
        // rainy-4
        return 'https://images.unsplash.com/photo-1496034663057-6245f11be793';
    }

    if (weatherId >= 500 && weatherId <= 550) {
        // rainy-7
        return 'https://images.unsplash.com/photo-1433863448220-78aaa064ff47';
    }

    if (weatherId == 600) {
        // snowwy-4
        return 'https://images.pexels.com/photos/907284/pexels-photo-907284.jpeg';
    }

    if (weatherId == 601) {
        // snowwy-5
        return 'https://images.pexels.com/photos/904382/pexels-photo-904382.jpeg';
    }

    if (weatherId > 601 && weatherId <= 650) {
        // snowwy-6
        return 'https://images.pexels.com/photos/907284/pexels-photo-907284.jpeg';
    }

    if (weatherId == 800) {
        // day
        return 'https://e3.365dm.com/23/11/2048x1152/skynews-uk-weather-rainbow_6375407.jpg';
    }

    if (weatherId == 801) {
        // cloudy-day-1
        return 'https://cdn.pixabay.com/photo/2023/03/08/17/01/darling-7838296_1280.jpg';
    }

    if (weatherId == 802) {
        // cloudy-day-2
        return 'https://cdn.pixabay.com/photo/2023/03/08/17/01/darling-7838296_1280.jpg';
    }

    if (weatherId > 802) {
        // cloudy-day-3
        return 'https://cdn.pixabay.com/photo/2023/03/08/17/01/darling-7838296_1280.jpg';
    }

    return 'https://e3.365dm.com/23/11/2048x1152/skynews-uk-weather-rainbow_6375407.jpg'
}