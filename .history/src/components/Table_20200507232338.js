import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const getTime=(time)=>{
  return moment(time).format('YYYY-MM-DD, HH:mm:ss')
}

const handleClick=(e)=>{
  console.log(e.target.)
}

export default function TableComponent({users}) {
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
              <TableCell><Button>Заказ</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}