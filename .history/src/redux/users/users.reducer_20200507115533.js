import types from './users.types';


const initialValues = {
    users: [],
    isLoading:false,
};

const usersReducer = (state = initialValues, {type, payload}) => {
    switch (type) {
        case types.FETCH_USERS_START:
            return {
                ...state,
                isLoading:true,
            };
        case types.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
            };
        case types.FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: true,
            };
            default:
              return state
}};
export default usersReducer;
