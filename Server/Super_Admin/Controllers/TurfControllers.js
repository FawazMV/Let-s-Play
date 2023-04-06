import mongoose from "mongoose"
import { Axiosturf as axios } from "../Helpers/Axiosinstance.js"

export const getTurfRequests = (req, res, next) => {
    axios.get('/turf-admin/requests').then(({ data }) => res.status(200).json(data))
        .catch((err) => next(err));
}

export const reqAccept = (req, res, next) => {
    const id = req.body.id
    axios.patch('/turf-admin/accept', { id }).then(() => res.status(200).json({ message: 'Request accepted' }))
        .catch((err) => next(err));
}

export const reqCancel = (req, res, next) => {
    const id = req.body.id
    axios.delete('/turf-admin/cancel', { data: { id } }).then(() => res.status(200).json({ message: 'Request Cancelled' }))
        .catch((err) => next(err));
}

export const getTurfsAccepted = (req, res, next) => {
    axios.get('/turf-admin/all-turfs').then(({ data }) => res.status(200).json(data))
        .catch((err) => next(err));
}

export const ManageTurf = (req, res, next) => {
    const { id, status } = req.body
    axios.patch('/turf-admin/manage', { id, status }).then(() => res.status(200).json({ message: 'Done' }))
        .catch((err) => next(err));
}

