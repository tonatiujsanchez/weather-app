import { useState } from 'react'
import PropTypes from 'prop-types'
import { LoadingSpinner } from './LoadingSpinner'
import { getWeatherByCoords, getWeatherByPlace } from "../services"
import { toastError } from '../libs'
import countries from './../data/countries.json'
import './styles/form.css'

export const Form = ({ setCurrentWeather, onHiddenFormModal, coords, msgLocationNotAuthorized, setMsgLocationNotAuthorized }) => {

    const [country, setCountry] = useState(countries[0])
    const [place, setPlace] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const onClick = async() => {

        if(!coords){
            return toastError('','Habilite el acceso a la ubicación en la configuración de su navegador o ingrese un lugar desde el formulario.')
        }

        setIsLoading(true)
        const { data, hasError } = await getWeatherByCoords(coords)
        setIsLoading(false)

        if(hasError){
            return toastError('','Lugar no encontrado')
        }

        setCurrentWeather(data)
        onHiddenFormModal()
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault()

        if(place.trim() === ''){
            return toastError('','El lugar es requerido para consultar el clima')
        }

        setIsLoading(true)
        const { hasError, data } = await getWeatherByPlace( place.trim(), country )
        setIsLoading(false)

        if(hasError){
            return toastError('','Lugar no encontrado')
        }

        setCurrentWeather(data)
        setMsgLocationNotAuthorized(undefined)
        onHiddenFormModal()
    }


    return (
        <article>
            {
                msgLocationNotAuthorized && (
                    <p className="modal__error">{ msgLocationNotAuthorized }</p>
                )
            }
            <header className="modal__header">
                <button
                    onClick={ onClick }
                    disabled={ isLoading }
                    className="modal__btn-my-location"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                    </svg> 
                    Mi ubicación
                </button>
                {
                    !msgLocationNotAuthorized && (
                        <button 
                            onClick={ onHiddenFormModal }
                            className="modal__btn-close"
                        >
                            X
                        </button>
                    )
                }
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
                        disabled={ isLoading }
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
                        disabled={ isLoading } 
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
                    disabled={ isLoading }
                >
                    {
                        isLoading
                        ?( <LoadingSpinner /> )
                        : 'Buscar'
                    }
                </button>
            </form>
        </article>
    )
}

Form.propTypes = {
    setCurrentWeather: PropTypes.func,
    onHiddenFormModal: PropTypes.func,
    coords: PropTypes.object,
    msgLocationNotAuthorized: PropTypes.string,
    setMsgLocationNotAuthorized: PropTypes.func
}