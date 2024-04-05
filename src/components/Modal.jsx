import PropTypes from 'prop-types'


export const Modal = ({ children, onHiddenFormModal }) => {
    return (
        <div className="modal">
            <div className="overlay" onClick={ onHiddenFormModal }></div>
            <div className="modal__children">
               { children }
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    onHiddenFormModal: PropTypes.func
}