import {actionTypes} from './types';


const initialValues = {
    columns: [
        {
            label: "ID",
            field: "id",
            sort: "asc",
            width: 100
        },
        {
            label: "aircraftId",
            field: "aircraftId",
            sort: "asc",
            width: 100,
            icon: "far fa-plane fa-2x"
        },
        {
            label: "tailNumber",
            field: "tailNumber",
            sort: "asc",
            width: 100,
            icon: "fas fa-plane fa-2x"
        },
        {
            label: "constructionNumber",
            field: "constructionNumber",
            sort: "asc",
            width: 100,
            icon: "fas fa-hashtag fa-2x"
        },
        {
            label: "modelNumber",
            field: "modelNumber",
            sort: "asc",
            width: 100,
            icon: "fas fa-text-size fa-2x"
        },
        {
            label: "registeredDate",
            field: "registeredDate",
            sort: "asc",
            width: 100,
            icon: "fas fa-calendar-day fa-2x"
        },
        {
            label: "adshex",
            field: "adshex",
            sort: "asc",
            width: 100,
            icon: "fas fa-text-size fa-2x"
        },
        {
            label: "active",
            field: "active",
            sort: "asc",
            width: 100,
            icon: "far fa-toggle-on fa-2x"
        },
        {
            label: "economySeats",
            field: "economySeats",
            sort: "asc",
            width: 100,
            icon: "far fa-chair-office fa-2x"
        },
        {
            label: "businessSeats",
            field: "businessSeats",
            sort: "asc",
            width: 100,
            icon: "fas fa-chair-office fa-2x"
        },
        {
            field: "edit",
            sort: "asc",
            width: 100,
        },
        {
            field: "delete",
            sort: "asc",
            width: 100,
        }
    ],
    airplanes: [],
    hasSavedValues: false,
    defaultRows: [],
    updatedAirplane: {},

};

const airplanesReducer = (state = initialValues, {type, payload}) => {
    switch (type) {
        case actionTypes.FETCH_AIRPLANES_START:
            return {
                ...state,
                isLoading:true,
            };
        case actionTypes.FETCH_AIRPLANES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                airplanes: payload,
                defaultRows: payload
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
export default airplanesReducer;
