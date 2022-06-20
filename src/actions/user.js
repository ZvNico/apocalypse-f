import UserService from "../services/user";
import {RETRIEVE_USER_BY_ID, LOGIN, SIGN_UP, LOGOUT} from "./type";

export const getUser = (token, id) => async (dispatch) => {
    try {
        const res = await UserService.get(token, id)
        dispatch({
            type: RETRIEVE_USER_BY_ID,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await UserService.login(email, password)
        dispatch({
            type: LOGIN,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
}

export const signUp = (email, password, username) => async (dispatch) => {
    try {
        const res = await UserService.signUp(email, password, username)
        dispatch({
            type: SIGN_UP,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
}

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT,
        payload: null
    })
}

