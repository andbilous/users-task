import React from 'react';
// import {ModalHeader,ModalBody,Modal,Row,Col,Card} from 'reactstrap';
// import {Row,Col,Card,CardBody,Modal,ModalBody,ModalHeader} from 'reactstrap';
import HyperModal from 'react-hyper-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


const ModalComponent = ({classes,open,handleDrawerOpen,toggle,userDetails}) => {
  if(userDetails){
  return (
    <HyperModal
        isOpen={open}
        // requestClose={this.closeModal}
      >
         {userDetails.orders ? (
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
          {userDetails.orders.map(order=>{
            return (
          <TableRow>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
            )
            
          })}
        
            
        </TableBody>
      </Table>
         ):<h1>No orders</h1>}
         
      </HyperModal>
)}else{
  return (
<div></div>
  )
}
}
export default ModalComponent;