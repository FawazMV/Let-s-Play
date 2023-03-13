import bookingModel from "../Models/BookingModel.js";

export const bookSlot = async (req, res, next) => {
    try {
        const { user, turf, date, time } = req.body
        const newBooking = new bookingModel({
            bookDate: date, time, turf, user
        });
        await newBooking.save();
        return res.status(200).json({ message: 'Booking saved successfully' })
    } catch (error) {
        return res.status(500).json({ error: 'internal server error' })
    }
}

export const bookedSlot = async (req, res, next) => {
    try {
        const result = await bookingModel.find({ turf: req.query.id, bookDate: req.query.date }, { time: 1, _id: 0 })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ error: 'internal server error' })
    }
} 