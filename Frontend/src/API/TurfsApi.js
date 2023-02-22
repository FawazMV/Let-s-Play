import { Axiosturf as axios } from "./Axiosinstance.js";

export const getTurfs = () => {
    return new Promise((resolve, reject) => {
        axios.get('/turfs').then(({ data }) => {
            resolve(data)
        })
            .catch((err) => reject(err));
    })
}


export const getLocationWiseTurfs = (distric) => {
    return new Promise((resolve, reject) => {
        axios.get('/turfs-location', { params: { distric } }).then(({ data }) => {
            resolve(data)
        })
            .catch((err) => reject(err));
    })
}

