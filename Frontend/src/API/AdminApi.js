import { AxiosAdmin as axios } from "./Axiosinstance";

export const TurfsRequsted = (token) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-requests', { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data }) => resolve(data))
            .catch((err) => reject(err))
    })
}

