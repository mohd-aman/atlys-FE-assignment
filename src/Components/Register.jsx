import PropTypes from 'prop-types';

import Button from "./Common/Button/Button";
import Input from "./Common/Input/Input";
import ModalFooter from './Common/ModalFooter';

import { MODAL_STATE } from "../Utils/constant";
import ModalHeader from './Common/ModalHeader';

export default function Register({handleClick}){
    return(
        <div className="modal__container lg">
            <ModalHeader 
                title='Create an account to continue'
                subtitle='SIGN UP'
                handleClick={()=>handleClick(MODAL_STATE.NONE)}
                />
            <Input 
                label="Email" 
                type="text" 
                placeholder="Enter your email"
                />
            <Input 
                label="Username" 
                type="text" 
                placeholder="Choose a preferred username"
                />
            <Input 
                label="Password" 
                type="password" 
                placeholder="Enter your password"
                />
            <Button 
                value="Continue" 
                onClickHandler={()=>handleClick(MODAL_STATE.NONE)} 
            />
            <ModalFooter 
                footerText='Already have an account? '
                footerRedirectText='Login →'
                handleClick={()=>handleClick(MODAL_STATE.LOGIN)}
            />
        </div>
    )
}

Register.propTypes = {
    handleClick: PropTypes.func.isRequired,
}