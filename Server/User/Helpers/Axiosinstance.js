import Axios from 'axios'
export const Axiosbooking = Axios.create({
    baseURL: 'http://localhost:4321'
})

export const Axiosturf = Axios.create({
    baseURL: 'http://localhost:8888'
})

