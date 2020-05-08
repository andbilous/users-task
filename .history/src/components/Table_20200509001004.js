import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button} from 'reactstrap'
import moment from 'moment';



const getTime=(time)=>{
  return moment(time).format('YYYY-MM-DD, HH:mm:ss')
}


export default function TableComponent({users,currentUserData,setUserId}) {
  const [itemCount, setItemCount] = useState(10);

  const handleChangeCount = ()=>{
    
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
      <select onChange={(e)=>{console.log(e.target)}}>
  <option selected value="10">10</option>
  <option value="20">20</option>
  <option value="50">50</option>
</select>
    </React.Fragment>
  );
}