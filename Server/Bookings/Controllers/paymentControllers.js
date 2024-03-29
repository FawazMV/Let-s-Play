import mongoose from 'mongoose';
import {  paymentStripe } from '../Helpers/stripe.js';
import bookingModel from '../Models/BookingModel.js';


export const paymentIntent = async (req, res) => {
    try {
        const { book_id, email } = req.query
        const result = await bookingModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(book_id) } },
            { $lookup: { from: 'turfs', localField: 'turf', foreignField: '_id', as: 'turf' } },
            { $unwind: '$turf' },
            { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },
            { $project: { 'turf.courtName': 1, 'turf.Price': 1, _id: 0 } },
        ])
        const response = await paymentStripe(result[0]?.turf, email, book_id);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error !" });
    }
}




// export const sendAmountToDebitCard = async () => {

//     const paymentIntent = await cardPayment('4242 4242 4242 4242', '06', '24', '397', '1000').catch((error) => {
//         console.error('Error:');
//         console.error(error)
//     });
//     console.log('Payment succeeded:', paymentIntent);

// }

// sendAmountToDebitCard()




