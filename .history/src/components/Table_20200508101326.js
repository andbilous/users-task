import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button} from 'reactstrap'
import Modal
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
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(!open);
  
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
              <TableCell>
                <Button color="primary"
              onClick={()=>{handleClick(row.id)}}
              >Заказ</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
       <Modal open={open}/>
    </React.Fragment>
  );
}