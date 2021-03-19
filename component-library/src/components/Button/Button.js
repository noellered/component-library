import React from 'react';
import propTypes from 'prop-types';
import '../../styles/button.scss'

// Defaults to primary if invalid variant type supplied
const variantTypes = ['primary', 'secondary', 'danger', 'success', 'info', 'light', 'dark']
const validateVariant = (v) => {
    if(!variantTypes.includes(v) || !v){
        return 'primary';
    } else return v;
}

const Button = ({
    label,
    variant,
    isFlat,
    isOutline,
    isRound,
    ...props
}) => {

    variant = validateVariant(variant);

    const buttonVariant = `btn-${variant}`;
    const flat = isFlat ? 'flat' : '';
    const outline = isOutline ? 'outline' : '';
    const buttonLabel = label ? label : 'Click Here';
    const round = isRound ? 'round' : '';

    const classes = `btn ${buttonVariant} ${flat} ${outline} ${round}`

    return(
        <button type="button" className={classes} {...props}>
            { buttonLabel }
        </button>
    )
}

Button.propTypes = {
    label: propTypes.string,
    variant: propTypes.string,
    isFlat: propTypes.bool,
    isOutline: propTypes.bool,
    isRound: propTypes.bool,
}

export default Button;

