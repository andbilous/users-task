import React,{useEffect,useState} from 'react'
import usersAPI from '../API/users.api';
import {connect} from 'react-redux';


 const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = await usersAPI.getUsers()
    setData(result.data);
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
      fetchAirports: () => dispatch(fetchAirports()),
      addAirportAsync: (item) => dispatch(addAirportAsync(item)),
      changeInput: (updatedObject) => dispatch(changeInput(updatedObject)),
      deleteAirportAsync: (id) => dispatch(deleteAirportAsync(id)),
      updateAirportAsync: (updatedAirport) => dispatch(updateAirportAsync(updatedAirport)),
      sortAirportFieldAsc: (field) => dispatch(sortAirportFieldAsc(field)),
      sortAirportFieldDesc: (field) => dispatch(sortAirportFieldDesc(field)),
      findAirportCode: (value) => dispatch(findAirportCode(value)),
      findAirportShortName: (value) => dispatch(findAirportShortName(value)),
      resetRows: () => dispatch(resetRows())
  })
)(Users);

export {UsersContainer as Users};