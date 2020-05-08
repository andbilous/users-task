import React from 'react';
import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';




 const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <Row>
      <Col>
      <Card>
    {/* <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorenm
    </ModalBody>
  </Modal> */}
  <Modal
  open={open}
  // onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  222
</Modal>
  </Card>
  </Col>
  </Row>
  )
}

export default ModalComponent;