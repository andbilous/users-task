import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/users/user.actions'


 const Users = (props) => {
  const [data, setData] = useState([]);

  useEffect(async ()=>{
    setData(props.fetchUsers().data);
  },[])
  return (
    <div>

    </div>
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