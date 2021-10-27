import React from "react";
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
export default Button