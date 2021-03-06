import React from 'react';
import {ModalHeader,ModalBody,Modal,Row,Col} from 'reactstrap';



 const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <Row>
      <Col>
      <Card>
    <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorenm
    </ModalBody>
  </Modal>
  </Card>
  </Col>
  </Row>
  )
}

export default ModalComponent;