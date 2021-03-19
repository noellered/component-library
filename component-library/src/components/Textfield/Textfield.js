import React, { useState } from 'react';
import '../../styles/input.scss'

const Textfield = ({
    label,
    placeholder,
    isRound,
    showLabel,
    hasError,
    errorMessage,
    hasSuccess,
    successMessage,
    ...props
}) => {
    const [isFilled, setIsFilled] = useState(false)

    const round = isRound ? 'round' : '';
    const error = hasError ? 'error' : '';
    const success = hasSuccess ? 'success' :'';
    const filled = isFilled ? 'filled' : '';

    const handleValueInput = (e) => {
        if(e.target.value){
            setIsFilled(true);
        } else setIsFilled(false);
    }

    const classes = `${round} ${error} ${success} ${filled}`

    return(
        <div className={`input-container ${label && showLabel ? 'with-label' : ''}`}>
            <div className="label-container">
                { label && showLabel ? <label className={classes}>{label}</label> : ''}
                { hasError ? <span className="error-message">{errorMessage}</span> : ''}
                { hasSuccess ? <span className="success-message">{successMessage}</span> : ''}
            </div>
            <input type="text" placeholder={placeholder} className={classes} onChange={handleValueInput} {...props}></input>
        </div>
    )
}

export default Textfield;