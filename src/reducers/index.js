import {combineReducers} from "redux"
import games from "./game"
import user from "./auth"

export default combineReducers({
    games,
    user,
})



