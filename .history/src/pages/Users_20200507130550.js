import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import { Table,Container, Row, Col } from 'reactstrap';
import {fetchUsers} from '../redux/users/user.actions'


 const Users = (props) => {
  const [data, setData] = useState([]);

  useEffect(async ()=>{
    setData(props.fetchUsers().data);
  },[])
  return (
     <Container>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
   </
  )
}
const UsersContainer = connect(
  (state) => ({
      users: state.usersReducer.users
  }), (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
      
  })
)(Users);

export {UsersContainer as Users};