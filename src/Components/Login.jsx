import PropTypes from 'prop-types';

import Button from './Common/Button/Button';
import Input from './Common/Input/Input';
import ModalFooter from './Common/ModalFooter';

import { MODAL_STATE } from '../Utils/constant';
import ModalHeader from './Common/ModalHeader';

export default function Login({handleClick}){
    return(
        <div className="modal__container">
            <ModalHeader 
                title='Log into your account' 
                subtitle='WELCOME BACK' 
                handleClick={()=>handleClick(MODAL_STATE.NONE)}
                />
            <Input 
                label="Email or Username" 
                type="text" 
                placeholder="Enter your email or username"
                />
            <Input 
                label="Password" 
                type="password" 
                placeholder="Enter your password"
                />
            <Button 
                value="Login now"  
                onClickHandler={()=>handleClick(MODAL_STATE.NONE)} 
                />
            <ModalFooter 
                footerText='Not registered yet? ' 
                footerRedirectText='Register → ' 
                handleClick={()=>handleClick(MODAL_STATE.REGISTER)} 
                />
        </div>
    )
}

Login.propTypes = {
    handleClick: PropTypes.func.isRequired,
}