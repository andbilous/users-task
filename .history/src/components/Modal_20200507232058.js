import React from 'react'
import Modal from '@material-ui/core/Modal';

 const Modal = () => {
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body}
  </Modal>
  )
}
export default Modal;