import types from './users.types';
import usersAPI from '../../API/users.api';


export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  try{
    const data = await airportAPI.getAirplanes();
  }catch(e){

  }


};


const fetchUsersStart = () => ({
  type: types.FETCH_USERS_START
});

const fetchUsersSuccess = (data) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data
});

const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error
});