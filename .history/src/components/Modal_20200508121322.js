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
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Ім'я</TableCell>
            <TableCell>Мессенджер</TableCell>
            <TableCell>Час останнього повідомлення</TableCell>
            <TableCell>Додаткова інформація</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{getTime(row.lastMessageTime)}</TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table> 
      </HyperModal>
  
  )
}

export default ModalComponent;