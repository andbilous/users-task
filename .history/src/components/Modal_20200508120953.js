import React from 'react';
// import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';
// import {Row,Col,Card,CardBody,Modal,ModalBody,ModalHeader} from 'reactstrap';
import HyperModal from 'react-hyper-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const ModalComponent = ({classes,open,handleDrawerOpen,toggle,userDetails}) => {
  console.log(userDetails)
  return (
    <HyperModal
        isOpen={open}
        // requestClose={this.closeModal}
      >
        Your awesome modal content
      </HyperModal>
  
  )
}

export default ModalComponent;