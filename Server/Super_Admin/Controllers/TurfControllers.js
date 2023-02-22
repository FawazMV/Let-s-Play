import mongoose from "mongoose"
import { Axiosturf as axios } from "../Helpers/Axiosinstance.js"

export const getTurfRequests = (req, res, next) => {
    axios.get('/turf-requests').then(({ data }) => res.status(200).json(data))
        .catch((err) => next(err));
}

