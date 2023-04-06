import { Axiosbooking as axios } from "../Helpers/Axiosinstance.js"

export const getReports = async (req, res, next) => {
    try {
        const response = await axios.get('/all-reports')
        return res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}

