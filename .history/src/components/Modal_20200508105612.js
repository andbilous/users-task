import React from 'react';
import {ModalHeader,ModalBody,Modal,Row,Col} from 'reactstrap';



 const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <Row>
      <
    <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorenm
    </ModalBody>
  </Modal>
  </Row>
  )
}

export default ModalComponent;