import PropTypes from 'prop-types';

const ModalFooter = ({ handleClick,footerText,footerRedirectText }) => (
    <div
        className="modal__footer"
        onClick={handleClick}>
        {footerText} <span>{footerRedirectText}</span>
    </div>
);

ModalFooter.propTypes = {
    handleClick: PropTypes.func.isRequired,
    footerText: PropTypes.string.isRequired,
    footerRedirectText: PropTypes.string.isRequired,
}

export default ModalFooter;

