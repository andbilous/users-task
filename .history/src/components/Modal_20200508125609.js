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
  if(userDetails.id){
    
  }
  return (
    <HyperModal
        isOpen={open}
        // requestClose={this.closeModal}
      >
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Ціна</TableCell>
            <TableCell>Валюта</TableCell>
            <TableCell>Спосіб оплати</TableCell>
            <TableCell>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table> 
      </HyperModal>
)}
export default ModalComponent;