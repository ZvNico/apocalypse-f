import {
    RETRIEVE_GAMES,
    RETRIEVE_GAME_BY_ID
} from "../actions/type"

const initialState = [];


const gameReducer = (games = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case RETRIEVE_GAMES:
            return payload
        case RETRIEVE_GAME_BY_ID:
            return [...games, payload]
        default:
            return games
    }
}

export default gameReducer
