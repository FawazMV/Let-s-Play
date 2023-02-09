import { Axiosuser as axios } from "./Axiosinstance"

export const Signup = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/signup', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const Login = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/login', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const OTP = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('/otp', data).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const Resend = (mobile) => {
    return new Promise((resolve, reject) => {
        axios.post('/otp-resend', { mobile }).then(() => resolve())
            .catch((err) => reject(err.message))
    })
}