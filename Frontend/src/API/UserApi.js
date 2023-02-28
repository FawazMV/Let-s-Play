import { Axiosuser } from "./Axiosinstance"

export const getUserDetails = (token) => {
    return new Promise((resolve, reject) => {
        Axiosuser.get('/user-profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({ data }) => resolve(data))
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const updateProfile = (data, token) => {
    alert()
    return new Promise((resolve, reject) => {
        Axiosuser.put('/update-profile', data   , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({ data }) => resolve(data))
            .catch(err => reject(err?.response?.data?.message))
    })
}
