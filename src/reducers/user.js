import {
    RETRIEVE_USER_BY_ID,
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "../actions/type"

const initialState = [];


const userReducer = (games = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case RETRIEVE_USER_BY_ID:
            return payload
        case LOGIN:
            return [...games, payload]
        case SIGN_UP:
            return
        case LOGOUT:
            return
        default:
            return games
    }
}

export default userReducer
