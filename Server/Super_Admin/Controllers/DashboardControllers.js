import { Axiosbooking, Axiosturf, Axiosuser } from "../Helpers/Axiosinstance.js"

export const dashboardGraphDetails = async (req, res) => {
    try {
        const response = await Axiosbooking.get('/dashboard-graph-details')
        return res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}

export const getUsersCount = async (req, res) => {
    try {
        const response = await Axiosuser.get('/req-user/get-user-count')
        return res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}

export const getTurfsCount = async (req, res) => {
    try {
        const response = await Axiosturf.get('/turf-admin/get-turf-count')
        return res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}

export const getProfit = async (req, res) => {
    try {
        const response = await Axiosbooking.get('/dashboard-get-admin-profit')
        return res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}