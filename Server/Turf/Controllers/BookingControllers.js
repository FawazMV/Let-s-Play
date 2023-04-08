import { Axiosbooking as axios } from "../Helpers/Axiosinstance.js"

export const bookedTurfs = async (req, res, next) => {
    try {
        const response = await axios.get('/turf-booked-details', { params: { id: req.user.id } })
        if (response.status === 200) return res.status(200).json(response.data)
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const earningReport = async (req, res) => {
    try {
        const response = await axios.get('/collection-report', { params: { turf: req.user.id } })
        if (response.status === 200) return res.status(200).json(response.data)
    }
    catch (error) {
        console.warn(error)
        return res.status(500).json({ error: 'Internal Server Error', err: error })
    }
}

export const getBookedSlots = async (req, res) => {
    try {
        const response = await axios.get('/booked-slots', { params: { date: req.query.date, id: req.query.id } })
        if (response.status === 200) return res.status(200).json(response.data)
    }
    catch (error) {
        console.warn(error)
        return res.status(500).json({ error: 'Internal Server Error', err: error })
    }
}