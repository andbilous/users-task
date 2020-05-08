import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 
// import ModalComponent from './Modal';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const getTime=(time)=>{
  return moment(time).format('YYYY-MM-DD, HH:mm:ss')
}

const handleClick=(id)=>{
  console.log(id)
}



export default function TableComponent({users,currentUserData}) {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles();
  
  return (
    <React.Fragment>
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
          {users.map((row,index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{getTime(row.lastMessageTime)}</TableCell>
              <TableCell><Button
              onClick={()=>{handleClick(row.id)}}
              >Заказ</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}