import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const stripeInstance = stripe('sk_test_XXXXXXXXXXXXXXXXXXXXXX', {
//     apiVersion: '2021-03-23',
// });
console.log(process.env.STRIPE_SECRET_KEY)

const domain = process.env.Client_Side_URL
const priceId = "price_123"
export const paymentStripe = async () => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{ price_data: { currency: "INR", product_data: { name: 'Turf Slot Booking' }, unit_amount: 2000, }, quantity: 1, }],
        mode: 'payment',
        success_url: `${domain}/`,
        cancel_url: `${domain}/profile`,
        customer_email:'john.doe@example.com'
    });

    return session.id;
};


const turfSlotPrice = await stripe.prices.create({
    unit_amount: 1000, // The cost of booking a slot in the turf in smallest currency unit (e.g., cents)
    currency: 'usd',
    product_data: {
        name: 'Turf Slot Booking', // The name of the product
    },
});

// line_items: [
//     {
//         price_data: {
//             currency: "INR", product_data: { name: 'Turf Slot Booking' }, unit_amount: 2000,
//         },
//     },
// ],
//     mode: "payment",