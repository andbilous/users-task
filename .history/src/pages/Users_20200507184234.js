import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/users/user.actions'
import Button from '@material-ui/core/Button';
import TableComponent from '../components/TableComponent'

 const Users = (props) => {
  useEffect(async ()=>{
    props.fetchUsers();
  },[])

  return (
    <>
    <TableComponent users={props.users}/>
    </>

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