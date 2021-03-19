const variantTypes = ['primary', 'secondary', 'danger', 'success', 'info', 'light', 'dark']
const sizeList = ['small', 'regular', 'large']


export const validateVariant = (v) => {
    if(!variantTypes.includes(v) || !v){
        return 'primary';
    } else return v;
}

export const validateSize = (s) => {
    if(!sizeList.includes(s) || !s){
        return 'regular';
    } else return s;
}