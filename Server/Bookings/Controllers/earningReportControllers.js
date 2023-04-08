import mongoose from "mongoose";
import { monthwiseReportCreation } from "../Helpers/helpers.js";
import bookingModel from "../Models/BookingModel.js";
import paymentModel from "../Models/PaymentDetails.js";

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

//turf dashboard

export const getPaymentDetails = async (req, res) => {
    try {
        const result = await paymentModel.aggregate([
            { $match: { turf: new mongoose.Types.ObjectId(req.query.turf) } },
            { $unwind: "$withdrawn" },
            { $group: { _id: null, totalWithdrawn: { $sum: "$withdrawn.amount" }, balance: { $first: "$balance" } } },
            { $project: { _id: 0, balance: 1, totalWithdrawn: 1 } }
        ])
        return res.status(200).json(result[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error', err: error })
    }
}


export const getTurfGraphData = async (req, res) => {
    try {
        const y = new Date().getFullYear();
        const firstDay = new Date(y, 0, 1);
        let bookings = await bookingModel.find({ bookDate: { $gte: firstDay }, payment: 'Success', turf: new mongoose.Types.ObjectId(req.query.turf) }).select('bookDate rate').lean()
        const monthlyReport = monthwiseReportCreation(bookings)
        return res.status(200).json({ monthlyReport })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error', err: error })
    }
}

export const getTurfBookingCount = async (req, res) => {
    try {
        let total = await bookingModel.find({ payment: 'Success', turf: new mongoose.Types.ObjectId(req.query.turf) }).count()
        let today = await bookingModel.find({ payment: 'Success', turf: new mongoose.Types.ObjectId(req.query.turf), bookDate:  Date.now() }).count()
        console.log(today, total)
        return res.status(200).json({ total, today })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error', err: error })
    }
}

//superadmin

export const dashboardGraphDetails = async (req, res) => {
    try {
        const y = new Date().getFullYear();
        const firstDay = new Date(y, 0, 1);
        let bookings = await bookingModel.find({ bookDate: { $gte: firstDay }, payment: 'Success' }).select('bookDate rate').lean()
        const monthlyReport = monthwiseReportCreation(bookings)
        let turfWiseReport = await bookingModel.aggregate([
            { $match: { payment: 'Success' } },
            { $lookup: { from: 'turfs', localField: 'turf', foreignField: '_id', as: 'turf' } },
            { $group: { _id: "$turf._id", name: { "$first": "$turf.courtName" }, totalPrice: { $sum: "$rate" } } },
            { $project: { _id: 0 } },
            { $sort: { totalPrice: -1 } }
        ])
        return res.status(200).json({ turfWiseReport, monthlyReport })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error', err: error })
    }
}

export const getAdminProfit = async (req, res) => {
    const result = await bookingModel.aggregate([
        { $match: { payment: 'Success' } },
        { $group: { _id: null, total: { $sum: "$rate" } } },
        { $project: { _id: 0, total: 1 } }
    ])
    return res.status(200).json({ profit: result[0]?.total * 5 / 100 })
}