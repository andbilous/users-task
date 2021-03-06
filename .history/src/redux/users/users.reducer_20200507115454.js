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
     

        case actionTypes.SORT_AIRPLANE_FIELD_DESC:
            return {
                ...state,
                airplanes: state.airplanes.sort(function (a, b) {
                    if (typeof a[`${payload}`] === 'string' && typeof b[`${payload}`] === 'string') {
                        if (a[`${payload}`] > b[`${payload}`]) {
                            return -1;
                        }
                        if (b[`${payload}`] > a[`${payload}`]) {
                            return 1;
                        }
                        return 0;
                    }
                    return b[`${payload}`] - a[`${payload}`]
                })
            };
        case actionTypes.CHANGE_INPUT_AIRPLANES:
            return {
                ...state,
                hasSavedValues: true,
                rows: state.rows.map((row) => {
                    if (row.id === payload.id) {
                        const updatedRow = Object.assign({
                            ...row
                        }, {
                            [`${payload.field}`]: payload.value
                        });
                        return updatedRow
                    } else return row;
                })
            };
        case actionTypes.UPDATE_AIRPLANE:
            return {
                ...state,
                airplanes: state.airplanes.map((row) => {
                    if (row.id === payload.id) return payload;
                    return row;
                })
            };
        case actionTypes.SAVE_VALUES:
            return {
                ...state,
                hasSavedValues: false
            };
        case actionTypes.LOGOUT:
            return initialValues;
        default:
            return state;
    }
};
export default usersReducer;
