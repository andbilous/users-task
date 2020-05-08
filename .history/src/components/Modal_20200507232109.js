import React from 'react'
import Modal from '@material-ui/core/Modal';

 const Modal = (props) => {
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {props.body}
  </Modal>
  )
}
export default Modal;