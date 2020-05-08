import React from 'react';
import {ModalHeader,ModalBody,Modal} from 'reactstrap';



 const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <div>
    <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorenm
    </ModalBody>
  </Modal>
  </div>
  )
}

export default ModalComponent;