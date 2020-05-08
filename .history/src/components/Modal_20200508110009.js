import React from 'react';
// import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';
import {Row,Col,Card,CardBody,Modal,ModalBody,ModalHeader} from 'reactstrap';



 const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <Row>
      <Col>
      <Card>
        <CardBody>
        <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorenm
    </ModalBody>
  </Modal> 
        </CardBody>
      </Card>
      </Col>
    </Row>
   

  )
}

export default ModalComponent;