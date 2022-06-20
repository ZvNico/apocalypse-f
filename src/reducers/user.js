import {
    RETRIEVE_USER_BY_ID,
    LOGIN,
    LOGOUT,
    SIGN_UP
} from "../actions/type"

const initialState = {
    user: null,
    token_access: null,
    token_refresh: null
}


const userReducer = (user = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case RETRIEVE_USER_BY_ID:
            return user
        case LOGIN:
            return {user: payload.user, token_access: payload.access, token_refresh: payload.refresh}
        case SIGN_UP:
            return user
        case LOGOUT:
            return initialState
        default:
            return user
    }
}

export default userReducer
