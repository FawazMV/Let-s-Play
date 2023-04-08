import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const domain = process.env.Client_Side_URL

export const paymentStripe = async ({ Price, courtName }, email, id) => {
    console.log(Price, courtName, email, id)
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{ price_data: { currency: "INR", product_data: { name: courtName + '- Turf Slot Booking' }, unit_amount: Price * 100, }, quantity: 1, }],
        mode: 'payment',
        success_url: `${domain}/success/${id}`,
        cancel_url: `${domain}/failed/${id}`,
        customer_email: email
    });

    return session.id;
};


// export const cardPayment = async (cardNumber, expMonth, expYear, cvc, amount) => {
//     try {
//         const payout = await stripe.payouts.create({
//             amount: 1000,
//             currency: 'inr',
//             method: 'standard',
//             destination: {
//                 account_number: '000123456789',
//                 account_holder_name: 'John Doe',
//                 account_holder_type: 'individual',
//                 bank_name: 'State Bank of India',
//                 branch_name: 'Mumbai Main',
//                 branch_city: 'Mumbai',
//                 country: 'IN'
//             }
//         });
//         console.log(payout);
//     } catch (error) {
//         if (error.type === 'StripeInvalidRequestError') {
//             console.log(`Invalid requestt: ${error}`);
//         } else {
//             console.log(`Unexpected error: ${error}`);
//         }
//     }

// }



// const sendMoneyToIndianBank = async () => {
//     const payout = await stripe.payouts.create({
//         amount: 1000,
//         currency: 'usd',
//         method: 'standard',
//         destination: {
//             bank_account: {
//                 account_number: 'account_number',
//                 account_holder_name: 'account_holder_name',
//                 account_holder_type: 'individual',
//                 currency: 'inr',
//                 country: 'IN',
//                 routing_number: 'ifsc_code'
//             }
//         }
//     });

//     console.log(payout);
// };

// sendMoneyToIndianBank();