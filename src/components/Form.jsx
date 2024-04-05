import PropTypes from 'prop-types'
import { getWeatherByPlace } from "../services"


export const Form = ({ setCurrentWeather }) => {


    const handleSubmit = async(ev) => {
        ev.preventDefault()

        const { hasError, data } = await getWeatherByPlace( 'Jalisco' )

        if(hasError){
            return console.log('Hubo un error')
        }

        setCurrentWeather(data)

    }

    return (
        <form
            onSubmit={ handleSubmit }
            className="form"
        >
            <div className="form__field">
                <label htmlFor="place" className="form__label">Lugar</label>
                <input type="text" name="place" id="place" className="form__input" />
            </div>
            <div className="form__field">
                <label htmlFor="place" className="form__label">País</label>
                <input type="text" name="place" id="place" className="form__input" />
            </div>
            <button
                type="submit"
                className="button-submit"
            >
                Buscar
            </button>
        </form>
    )
}

Form.propTypes = {
    setCurrentWeather: PropTypes.func
}