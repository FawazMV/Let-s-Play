import mongoose from "mongoose";
import bookingModel from "../Models/BookingModel.js";

export const turfWiseEarningReport = async (req, res) => {
    try {

        let DaysAgo = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);
        let report = await bookingModel.aggregate([
            { $match: { turf: new mongoose.Types.ObjectId(req.query.turf), bookDate: { $gte: DaysAgo }, payment: 'Success' } },
            {
                $group: {
                    _id: "$bookDate",
                    totalPrice: { $sum: "$rate" },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ])
        return res.status(200).json(report)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Internal Server Error', err: err })
    }
}

export const allReports = async (req, res, next) => {
    try {
        let report = await bookingModel.aggregate([
            { $match: { payment: 'Success' } },
            { $lookup: { from: 'turfs', localField: 'turf', foreignField: '_id', as: 'turf' } },
            {
                $group: {
                    _id: "$turf._id",
                    name: { "$first": "$turf.courtName" },
                    totalPrice: { $sum: "$rate" },
                    count: { $sum: 1 }
                }
            },
            { $sort: { totalPrice: 1 } }
        ])
        return res.status(200).json(report)
    } catch (error) {
        console.log(error)
    }
}