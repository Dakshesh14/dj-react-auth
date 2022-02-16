import {
    USER_LOGIN_SUCCESS,
    USER_REGISTER_SUCCESS,
    USER_LOGOUT,
} from './actionType';


// for login success
export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
})

// for register success
export const userRegisterSuccess = (payload) => ({
    type: USER_REGISTER_SUCCESS,
    payload
})

// for logout
export const userLogout = () => ({
    type: USER_LOGOUT,
})