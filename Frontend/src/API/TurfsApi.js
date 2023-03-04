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

export const getTurfProfile = (token) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({ data }) => resolve(data))
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const updateTurfDetails = (data, token) => {
    return new Promise((resolve, reject) => {
        axios.patch('/update-turf-profile', data, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const getTurfDetails = (id) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-details', { params: { id } }).then(({ data }) => resolve(data))
            .catch(err => reject(err?.response?.data?.message))
    })
}