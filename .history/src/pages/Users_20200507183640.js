import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/users/user.actions'
import Button from '@material-ui/core/Button';
import Table from '../components/Table'

 const Users = (props) => {

  useEffect(async ()=>{
    props.fetchUsers();
  },[])

  return (
    <>
    <Table users={}/>
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