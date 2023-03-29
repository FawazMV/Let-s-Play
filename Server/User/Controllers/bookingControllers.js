import { Axiosbooking as axios } from "../Helpers/Axiosinstance.js";

export const bookSlot = async (req, res, next) => {
    try {
        const body = req.body
        body.user = req.user.id
        const { data } = await axios.post('/book-slot', body)
        if (data) return res.status(200).json(data);
    }
    catch (error) {
        // console.log(error)
        return res.status(500).json({ error: "Internal Server Error !" })
    }
}

export const userBookings = async (req,res) => {
    try {
        const { data } = await axios.get('/user-bookings', { params: { user: req.user.id } })
        if (data) return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error !" })
    }
}