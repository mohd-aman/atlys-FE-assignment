import PropTypes from 'prop-types';

import styles from './Button.module.css'

export default function Button({onClickHandler,size,value,extraClass}){
    return (
        <button onClick={onClickHandler} className={`${styles.Button} " " ${size === 'small'?styles.Small:styles.Large} ' ' ${extraClass && extraClass}
        }`}>{value}</button>
    )
}


Button.propTypes = {
    onClickHandler: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large']).isRequired,
    value: PropTypes.string.isRequired,
    extraClass: PropTypes.string,
};