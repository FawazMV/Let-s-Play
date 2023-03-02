import { Axiosuser } from "./Axiosinstance"

export const otpCall = (data) => {
    return new Promise((resolve, reject) => {
        Axiosuser.post('/otp-send', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const userLogin = (data) => {
    return new Promise((resolve, reject) => {
        Axiosuser.post('/login', data).then(({ data }) => resolve(data.token))
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const otpVerification = (data) => {
    return new Promise((resolve, reject) => {
        Axiosuser.post('/verify-otp', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const registerUser = (data) => {
    return new Promise((resolve, reject) => {
        Axiosuser.post('/register-user', data).then(() => resolve())
            .catch(err => reject(err?.message))
    })
}

export const otpResend = (mobile) => {
    return new Promise((resolve, reject) => {
        Axiosuser.post('/otp-resend', { mobile }).then(() => resolve())
            .catch((err) => reject(err.message))
    })
}