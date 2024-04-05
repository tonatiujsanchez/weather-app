import PropTypes from 'prop-types'


export const ToggleTemp = (value, onChange) => {
    return (
        <div className="toggle-button-cover">
            <div id="button-3" className="button r">
                <input 
                    className="checkbox" 
                    type="checkbox"
                    value={value}
                    onChange={ ({ target })=> onChange( target.value ) }
                />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
        </div>
    )
}


ToggleTemp.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
}