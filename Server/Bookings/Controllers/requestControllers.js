import mongoose from "mongoose"
import bookingModel from "../Models/BookingModel.js"

export const bookingDetails = async (req, res, next) => {
    try {
        console.log(req.query.id)

        const result = await bookingModel.aggregate([
            { $match: { turf: new mongoose.Types.ObjectId(req.query.id), payment: 'Success' } },
            { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },
            { $unwind: '$user' },
            { $project: { 'user.password': 0 } },
            { $sort: { bookDate: -1, time: 1 } }
        ])
        console.log(result)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}