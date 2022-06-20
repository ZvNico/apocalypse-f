import {http} from "./index"

class GameService {
    getAll = () => {
        return http.get("games/")
    }
    get = (id) => {
        return http.get(`game/${id}/`)
    }
}

export default new GameService()
