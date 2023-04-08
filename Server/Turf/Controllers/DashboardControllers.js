import { Axiosbooking as axios } from "../Helpers/Axiosinstance.js"

export const getpaymentDetails = async (req, res) => {
    try {
        const response = await axios.get('/turf-profit-details', { params: { turf: req.user.id } })
        return res.status(200).json(response.data)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Internal Server Error', err: err })
    }
}


export const getTurfGraphData = async (req, res) => {
    try {
        const response = await axios.get('/turf-graph-data', { params: { turf: req.user.id } })
        return res.status(200).json(response.data)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Internal Server Error', err: err })
    }
}

export const getTurfBookingCount = async (req, res) => {
    try {
        const response = await axios.get('/turf-bookings-count', { params: { turf: req.user.id } })
        return res.status(200).json(response.data)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Internal Server Error', err: err })
    }
}
