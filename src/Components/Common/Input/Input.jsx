import styles from  "./Input.module.css"
import PropTypes from 'prop-types'
import Eye from '/src/assets/svg/Eye.svg'

export default function Input({label,placeholder,type}){
    return (
        <label className={styles.Label}>
            {label} 
            {type === 'password' &&  <img src={Eye} alt="Eye Icon"/>}
            <input className={styles.Input} placeholder={placeholder} type={type}/>
        </label>
    )
    
}

Input.propTypes = {
    label:PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password']).isRequired,
}
