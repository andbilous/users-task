import React from 'react';
// import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import { CardBody } from 'reactstrap';



 const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <Row>
      <Col>
      <Card>
        <CardBody>
          
        </CardBody>
      </Card>
      </Col>
    </Row>
    <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorenm
    </ModalBody>
  </Modal> 

  )
}

export default ModalComponent;