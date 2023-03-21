import { Axiosturf as axios } from "../../Axiosinstance";

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

export const getTurfProfile = async (token) => {
    try {
        const response = await axios.get('/turf-profile', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }

}

export const updateTurfDetails = async (data, token) => {
    try {
        const response = await axios.patch('/update-turf-profile', data, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getTurfDetails = (id) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-details', { params: { id } }).then(({ data }) => resolve(data))
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const getBookedDetails = async (token) => {
    try {
        const response = await axios.get('/booked-details', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}