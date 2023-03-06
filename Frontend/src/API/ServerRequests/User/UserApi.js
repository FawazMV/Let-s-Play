import { Axiosuser } from "../../Axiosinstance"

export const getUserDetails = async (token) => {
    try {
        const response = await Axiosuser.get('/profile/user-details', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const updateProfile = async (data, token) => {
    try {
        const response = await Axiosuser.put('/profile/update', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        return error?.response
    }
}
