import PropTypes from 'prop-types';

import CloseButton from '/src/assets/svg/CloseButton.svg'

const ModalHeader = ({ handleClick,subtitle,title }) => {
    return (
        <>
             <img 
            onClick={handleClick}
            className="modal__container__close-btn"
            src={CloseButton} 
            alt="close button icon"/>
            <h4 className="modal__subtitle">{subtitle}</h4>
            <h1 className="modal__title">{title}</h1>
        </>
    )};

ModalHeader.propTypes = {
    handleClick: PropTypes.func.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ModalHeader;

