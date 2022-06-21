import {
    RETRIEVE_GAMES,
    RETRIEVE_GAME_BY_ID
} from "../actions/type"

const initialState = [];


const cartReducer = (carts = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case RETRIEVE_GAMES:
            return payload
        case RETRIEVE_GAME_BY_ID:
            return [...carts, payload]
        default:
            return carts
    }
}

export default cartReducer
