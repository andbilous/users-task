import React,{useEffect,useState} from 'react'
import usersAPI from '../API/users.api';
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
      currentLanguage: state.localizationReducer.currentLanguage,
      isLoggedIn: state.authReducer.isLoggedIn,
      airports: state.airportsReducer.airports,
      columns: state.airportsReducer.columns,
      hasSavedValues: state.airportsReducer.hasSavedValues,
      inputs: state.airportsReducer.inputs,
      updatedAirport: state.airportsReducer.updatedAirport,
      isLoading: state.airportsReducer.isLoading
  }), (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
      
  })
)(Users);

export {UsersContainer as Users};