import { paymentStripe } from '../Helpers/stripe.js';

// app.post("/payment-intent", async (req, res) => {
//     const amount = req.body
//     //enter your checks whether the payment is correct
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency: "usd",
//     });
//     res.status(200).json(paymentIntent.client_secret);
// })
export const paymentIntent = async (req,res) => {
    try {
        const response = await paymentStripe();
        res.status(200).json({ response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error !" });
    }
}


