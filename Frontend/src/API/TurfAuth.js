import { Axiosturf } from "./Axiosinstance";

export const register = (formData) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/turf-registration', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => resolve())
            .catch((err) => reject(err?.response?.data?.message))
    })

}