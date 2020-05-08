import React from 'react';
// import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';
// import {Row,Col,Card,CardBody,Modal,ModalBody,ModalHeader} from 'reactstrap';
import HyperModal from 'react-hyper-modal';


const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <HyperModal
        isOpen={true}
        requestClose={this.closeModal}
      >
        Your awesome modal content
      </HyperModal>
  
  )
}

export default ModalComponent;