import mongoose from "mongoose";
import bookingModel from "../Models/BookingModel.js";

export const turfWiseEarningReport = async (req, res) => {
    let saleReport = []
    let DaysAgo = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);
    saleReport = await bookingModel.aggregate([
        { $match: { turf: new mongoose.Types.ObjectId(req.query.turf), bookDate: { $gte: DaysAgo } } },
        {
            $group: {
                _id: { $dateToString: { format: "%d-%m-%Y", date: "$bookDate" } },
                totalPrice: { $sum: "$rate" },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ])
    console.log(saleReport)
}