import axios from "axios"

export const http = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type": "application/json",
    }
})

export const httpAuth = (token) => {
    return axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
            "Content-type": "application/json",
            "Authorization": 'Bearer ' + token,
        }
    })
}


