import types from './users.types';
import usersAPI from '../../API/users.api';


export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersStart());
  try{

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