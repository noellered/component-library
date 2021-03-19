import React from 'react';
import '../../styles/button.scss'

const Button = ({
    label,
    variant,
    isFlat,
    isOutline,
    isRounded,
    ...props
}) => {
    const buttonVariant = variant ? `btn-${variant}` : 'btn-primary';
    const flat = isFlat ? 'flat' : '';
    const outline = isOutline ? 'outline' : '';
    const buttonLabel = label ? label : 'Click Here';
    const rounded = isRounded ? 'rounded' : '';

    const classes = `btn ${buttonVariant} ${flat} ${outline} ${rounded}`

    return(
        <button type="button" className={classes} {...props}>
            { buttonLabel }
        </button>
    )
}

export default Button;