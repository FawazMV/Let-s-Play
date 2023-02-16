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

export const OTP = (data) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/otp', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const EmailCheck = (email, mobile) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/send-otp', { email, mobile }).then(() => resolve())
            .catch((err) => reject(err?.response?.data?.message))
    })
}