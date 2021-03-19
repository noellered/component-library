import React from 'react';
import propTypes from 'prop-types';
import '../../styles/button.scss';
import { validateVariant, validateSize } from './buttonValidations';

const Button = ({
    label,
    variant,
    isFlat,
    isOutline,
    isRound,
    size,
    ...props
}) => {

    variant = validateVariant(variant);
    size = validateSize(size);

    const buttonVariant = `btn-${variant}`; 
    const flat = isFlat ? 'flat' : '';
    const outline = isOutline ? 'outline' : '';
    const buttonLabel = label ? label : 'Click Here';
    const round = isRound ? 'round' : '';

    const classes = `btn ${buttonVariant} ${flat} ${outline} ${round} ${size}`

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
    size: propTypes.string,
}

export default Button;

