import PropTypes from 'prop-types'
import './styles/toggleTemp.css'

export const ToggleTemp = ({ value, onChange }) => {
    return (
        <div className="toggle-field">
            <label htmlFor="toggle-temp">°C / °F</label>            
            <div className="toggle-button-cover">
                <div id="button-3" className="button r">
                    <input 
                        type="checkbox"
                        id="toggle-temp"
                        className="checkbox" 
                        value={ value }
                        onChange={ () => onChange( !value ) }
                    />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                </div>
            </div>
        </div>
    )
}


ToggleTemp.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
}