import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/users/user.actions'
import Button from '@material-ui/core/Button';



 const Users = (props) => {

  useEffect(async ()=>{
    props.fetchUsers();
  },[])


  return (
    <>
    
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