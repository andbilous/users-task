import React from 'react'
import Modal from '@material-ui/core/Modal';

 const ModalComponent = (props) => {
  return (
    <Modal
    open={props.open}
    // onClose={props.handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {props.body}
  </Modal>
  )
}
export default ModalComponent;