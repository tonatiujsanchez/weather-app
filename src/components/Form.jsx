import { useState } from 'react'
import PropTypes from 'prop-types'
import { getWeatherByCoords, getWeatherByPlace } from "../services"
import countries from './../data/countries.json'
import './styles/form.css'

export const Form = ({ setCurrentWeather, onHiddenFormModal, coords }) => {

    const [country, setCountry] = useState(countries[0])
    const [place, setPlace] = useState('')


    const onClick = async() => {
        const { data, hasError } = await getWeatherByCoords(coords)

        if(hasError){
            return console.log('Hubo un error')
        }
        setCurrentWeather(data)
        onHiddenFormModal()
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault()

        if(place.trim() === ''){
            return
        }

        const { hasError, data } = await getWeatherByPlace( place.trim(), country )

        if(hasError){
            return console.log('Hubo un error')
        }

        setCurrentWeather(data)
        onHiddenFormModal()
    }


    return (
        <article>
            <header className="modal__header">
                <button
                    onClick={ onClick }
                    className="modal__btn-my-location"
                >
                    🔰 Mi ubicación
                </button>
                <button 
                    onClick={ onHiddenFormModal }
                    className="modal__btn-close"
                >
                    X
                </button>
            </header>
            <form
                onSubmit={ handleSubmit }
                className="form"
            >
                <div className="form__field">
                    <label htmlFor="place" className="form__label">Lugar</label>
                    <input 
                        type="text" 
                        name="place" 
                        id="place"
                        value={place}
                        onChange={({ target })=> setPlace(target.value) }
                        className="form__input"
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="country" className="form__label">País</label>
                    <select 
                        name="country" 
                        id="country"
                        value={ country }
                        onChange={ ({ target })=> setCountry(target.value) } 
                        className="form__input"
                    >
                        {
                            countries.map( country => (
                                <option key={ country.key } value={ country.key }>
                                    { country.flag } { country.name }
                                </option>
                            ))
                        }
                    </select>
                </div>
                <button
                    type="submit"
                    className="button-submit"
                >
                    Buscar
                </button>
            </form>
        </article>
    )
}

Form.propTypes = {
    setCurrentWeather: PropTypes.func,
    onHiddenFormModal: PropTypes.func,
    coords: PropTypes.object
}