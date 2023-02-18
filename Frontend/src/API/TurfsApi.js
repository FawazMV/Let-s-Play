import { Axiosturf as axios } from "./Axiosinstance.js";

export const getTurfs = () => {
    return new Promise((resolve, reject) => {
        axios.get('/turfs').then(({data}) => {
            console.log(data)
            resolve(data)
        })
            .catch((err) => reject(err));
    })
}