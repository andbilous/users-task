import types from './users.types';


export const fetchUsers = (credentials) => (dispatch) => {
  dispatch(fetchUsersStart());
  try{

  }catch(e)


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