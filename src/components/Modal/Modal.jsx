import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { ModalBody } = props;
  return (
    <div className="modal show" id='overlay'>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className={`${props.modalBodyClass} modal-body`}>
            <div className='modaltitle'>{props.modalheading}</div>
            <ModalBody {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  modalheading: PropTypes.string,
};
