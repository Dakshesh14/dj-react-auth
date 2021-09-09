import {
    USER_LOGIN_SUCCESS,
    USER_REGISTER_SUCCESS,
    USER_LOGOUT,
} from './actionType';

const initialState = {
    isAuthenticated: false,
    user: {
        username: null,
        email: null,
        token: null,
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
            {
                return {
                    ...state,
                    user: action.payload,
                    isAuthenticated: true,
                }
            }
        case USER_LOGOUT:
            {
                return initialState
            }
        default:
            return state

    }
}


export default reducer