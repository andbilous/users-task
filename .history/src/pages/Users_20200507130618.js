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
       <Row>
         <Col>

         </Col>
       </Row>
        
   </Container>
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