import types from './users.types';


const initialValues = {
    users: [],
    isLoading:false,
};

const usersReducer = (state = initialValues, {type, payload}) => {
    switch (type) {
        case ty
            return {
                ...state,
                isLoading:true,
            };
        case actionTypes.FETCH_AIRPLANES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
            };
        case actionTypes.FETCH_AIRPLANES_FAILURE:
        case actionTypes.ADD_AIRPLANE_ASYNC_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.ADD_AIRPLANE_ASYNC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                airplanes: [payload, ...state.airplanes],
            };
        case actionTypes.ADD_AIRPLANE_ASYNC_FAILURE :
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case actionTypes.DELETE_AIRPLANE_ASYNC_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.DELETE_AIRPLANE_ASYNC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                airplanes: state.airplanes.filter(row => row.id !== payload),
            };
        case actionTypes.DELETE_AIRPLANE_ASYNC_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case actionTypes.SORT_AIRPLANE_FIELD_ASC:
            return {
                ...state,
                airplanes: state.airplanes.sort(function (a, b) {
                    if (typeof a[`${payload}`] === 'string' && typeof b[`${payload}`] === 'string') {
                        if (a[`${payload}`] > b[`${payload}`]) {
                            return 1;
                        }
                        if (b[`${payload}`] > a[`${payload}`]) {
                            return -1;
                        }
                        return 0;
                    }
                    return a[`${payload}`] - b[`${payload}`]
                })
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
