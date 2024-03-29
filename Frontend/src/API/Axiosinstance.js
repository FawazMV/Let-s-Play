import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'http://localhost:7777'
})

export const Axiosturf = Axios.create({
    baseURL: 'http://localhost:8888'
})

export const AxiosAdmin = Axios.create({
    baseURL: 'http://localhost:7171'
})  

export const AxiosBookings = Axios.create({
    baseURL: 'http://localhost:4321'
})  

export const AxiosReview = Axios.create({
    baseURL: 'http://localhost:9999'
})  