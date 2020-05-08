import React from 'react';
// import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';
// import {Row,Col,Card,CardBody,Modal,ModalBody,ModalHeader} from 'reactstrap';
import { Modal } from "react--modal";

const ModalComponent = ({classes,open,handleDrawerOpen,toggle}) => {
  return (
    <Modal open={true} 
    // onClose={this.onCloseModal}
    >
    <h2>Simple centered modal</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
      hendrerit risus, sed porttitor quam.
    </p>
  </Modal>
  
  )
}

export default ModalComponent;