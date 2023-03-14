import mongoose from 'mongoose';
import { paymentStripe } from '../Helpers/stripe.js';
import bookingModel from '../Models/BookingModel.js';

// app.post("/payment-intent", async (req, res) => {
//     const amount = req.body
//     //enter your checks whether the payment is correct
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency: "usd",
//     });
//     res.status(200).json(paymentIntent.client_secret);
// })
export const paymentIntent = async (req, res) => {
    try {
        const bookid = req.query.book_id
        const result = await bookingModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(bookid) } },
            { $lookup: { from: 'turfs', localField: 'turf', foreignField: '_id', as: 'turf' } },
            { $unwind: '$turf' },
            { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },
            { $unwind: '$user' },
            { $project: { 'turf.courtName': 1, 'turf.Price': 1, 'user.email': 1, _id: 0 } },
        ])
        const response = await paymentStripe(result[0].turf, result[0].user.email, bookid);
        res.status(200).json({ response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error !" });
    }
}


