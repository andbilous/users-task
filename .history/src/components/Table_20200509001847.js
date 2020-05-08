import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button} from 'reactstrap'
import moment from 'moment';
import Select from 'react-select';



const getTime=(time)=>{
  return moment(time).format('YYYY-MM-DD, HH:mm:ss')
}


export default function TableComponent({users,currentUserData,setUserId}) {
  const [itemCount, setItemCount] = useState(10);

  const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' } 
  ];

  const handleChangeCount = (e)=>{
    console.log(e)
    // setItemCount(e.target.value);
  }
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
          {users.slice(0,itemCount).map((row,index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{getTime(row.lastMessageTime)}</TableCell>
              <TableCell>
                <Button color="primary"
              onClick={()=>{setUserId(row.id)}}
              >Заказ</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
      <Select options = {options} />
    </React.Fragment>
  );
}