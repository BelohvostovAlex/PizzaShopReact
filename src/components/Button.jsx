import React from "react";
import PropTypes from 'prop-types'
import classsNames from 'classnames'

function Button({ onClick, className, outline, children}) {
    return (
        <button 
        onClick={onClick}
        className={classsNames('button', className, {
            'button--outline': outline,
        })}
        >{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}
export default Button