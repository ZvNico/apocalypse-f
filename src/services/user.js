import {http, httpAuth} from "./index"

class UserService {
    login = (email, password) => {
        return http.post("auth/login/", {email, password})
    }
    logout = () => {

    }
    signUp = (email, password, username) => {
        return http.post("auth/register/", {email, password, username})
    }
    get = (token, id) => {
        return httpAuth(token).get(`users/${id}`)
    }
}

export default new UserService()
