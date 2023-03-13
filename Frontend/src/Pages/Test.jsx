import { loadStripe } from "@stripe/stripe-js";
import { payementAction } from "../API/ServerRequests/Bookings/bookingApi";


const CheckoutPage = () => {

    const stripePromise = loadStripe(`${process.env.REACT_APP_YOUR_STRIPE_PUBLIC_KEY}`);

    const handlePayment = async (event) => {
        event.preventDefault();
        const stripe = await stripePromise;
        const response = await payementAction();
        console.log(response.data.response)
        if (response) {
            const result = await stripe.redirectToCheckout({ sessionId: response.data.response });
        }
    }
    return (
        <form onSubmit={handlePayment}>
            <button>Confirm Payment</button>
        </form>
    )
}

export default CheckoutPage
