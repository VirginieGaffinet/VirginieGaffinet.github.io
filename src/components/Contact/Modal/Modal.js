// import css
import './Modal.css';
// import propTypes
import PropTypes from 'prop-types';
// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({setIsSend}) {
  return (
    <div className='modal-container'>
      <FontAwesomeIcon 
        icon={faXmark} 
        size="2xl" 
        className='xMark'
        onClick={() => {
          setIsSend(false);
        }}
      ></FontAwesomeIcon>
      <p className='modal-message'>Votre message a bien été envoyé.</p>
      <p className='modal-message'>Je vous répondrais au plus vite.</p>
    </div>
  )
};

Modal.propTypes = {
  setTimeout : PropTypes.func,
}

export default Modal;