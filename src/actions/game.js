import {
    RETRIEVE_GAMES,
    RETRIEVE_GAME_BY_ID
} from "./type"

import GameService from "./../services/game"


export const getAllGames = () => async (dispatch) => {
    try {
        const res = await GameService.getAll()
        dispatch({
            type: RETRIEVE_GAMES,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
}

export const getGame = (id) => async (dispatch) => {
    try {
        const res = await GameService.get(id)
        dispatch({
            type: RETRIEVE_GAME_BY_ID,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
}
