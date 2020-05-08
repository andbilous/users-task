import types from './users.types'
import usersAPI from '../../API/users.api'

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart())
  try {
    const res = await usersAPI.getUsers()
    if (res.data) {
      dispatch(fetchUsersSuccess(res.data))
    } else {
      dispatch(fetchUsersFailure('error'))
    }
  } catch (e) {
    dispatch(fetchUsersFailure('error'))
  }
}

export const getUserData = (id) => async (dispatch) => {
  dispatch(getUserDataStart())
  try {
    const res = await usersAPI.getUserData(id)
    console.log(res)
    if (res.data) {
      dispatch(getUserDataSuccess(res.included))
    } else {
      dispatch(getUserDataFailure('error'))
    }
  } catch (e) {
    dispatch(getUserDataFailure('error'))
  }
}

const fetchUsersStart = () => ({
  type: types.FETCH_USERS_START
})

const fetchUsersSuccess = (data) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data
})

const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error
})

const getUserDataStart = () => ({
  type: types.GET_USERDATA_START
})

const getUserDataSuccess = (data) => ({
  type: types.GET_USERDATA_SUCCESS,
  payload: data
})

const getUserDataFailure = (error) => ({
  type: types.GET_USERDATA_FAILURE,
  payload: error
})
