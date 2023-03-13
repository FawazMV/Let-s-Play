import { Axiosbooking as axios } from "../Helpers/Axiosinstance.js";

export const bookSlot = async (req, res, next) => {
    try {
        const data = req.body
        data.user = req.user.id
        const result = await axios.post('/book-slot', data)
        console.log(result)
        if (result) return res.status(200).json({ message: 'Booking Successfull' });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error !" })
    }
}
