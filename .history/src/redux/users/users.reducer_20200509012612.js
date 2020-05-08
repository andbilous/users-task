import types from './users.types'

const initialValues = {
  users: [],
  isLoading: false,
  userData: {}
}

const usersReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case types.FETCH_USERS_START:
    case types.GET_USERDATA_START:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_USERDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload
      }
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload
      }
    case types.GET_USERDATA_FAILURE:
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}

export default usersReducer
