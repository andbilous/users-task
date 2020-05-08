import React from 'react';
import HyperModal from 'react-hyper-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {Row,Col} from 'reactstrap';


const ModalComponent = ({classes,open,handleDrawerOpen,toggle,userDetails,closeModal}) => {
  console.log()
  if(userDetails){
  return (
    <Row>
      <Col>
      <HyperModal
        isOpen={open}
        requestClose={closeModal}
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
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.currency}</TableCell>
              <TableCell>{order.currency}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>4</TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
            )
            
          })}
        </TableBody>
      </Table>
         ):
         <h1>No orders</h1>}
      </HyperModal>
      </Col>
    </Row>
    
)}else{
  return (
<div></div>
  )
}
}
export default ModalComponent;