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
  if(userDetails){
  return (
    <Row>
      <Col>
      </Col>
    </Row>
    
)}else{
  return (
<div></div>
  )
}
}
export default ModalComponent;