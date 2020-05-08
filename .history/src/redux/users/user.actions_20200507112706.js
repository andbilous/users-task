import types from './users.types';


export const fetchUsers = (credentials) => (dispatch) => {
  dispatch(submitFormStart());
  const loginService = new LoginService(credentials);
  loginService.submit().then(() => {
    axios.get(`http://localhost:3000/employees/${credentials.phone}`)
      .then((res) => {
        dispatch(submitFormSuccess());
        const userData = res.data;
        dispatch(loadContacts(userData.contacts));
          dispatch(loadChats(userData.chats));
        dispatch(loadProfileData(userData.profile));
        dispatch(goToProfilePage());
      }).catch(() => {
        dispatch(submitFormFailure('Error'));
      });
  })
    .catch(() => {
      dispatch(submitFormFailure('Error'));
    });
};


const fetchUsersStart = () => ({
  type: types.FETCH_USERS_START
});

const fetchUsersSuccess = (data) => ({
  type: ty,
  payload: data
});

const fetchUsersFailure = (error) => ({
  type: actionTypes.SUBMIT_FORM_FAILURE,
  payload: error
});