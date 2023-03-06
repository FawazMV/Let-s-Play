import { Axiosuser as axios } from "../Helpers/Axiosinstance.js"

export const getUsers = (req, res, next) => {
    axios.get('/req-user/get-users').then(({ data }) => {
        res.status(200).json(data)
    })
        .catch((err) => next(err));
}
