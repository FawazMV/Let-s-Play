import { useEffect, useRef, useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import { bookingConfirm, bookingSuccess, errorSwal } from '../../../../utils/Helpers/Swal'
import { bookSlot } from '../../../../API/ServerRequests/User/UserApi';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookedSlots } from '../../../../API/ServerRequests/Bookings/bookingApi';
const BookingCalendar = ({ bookings }) => {
    const { openingTime, closingTime, Price, Holiday } = bookings;
    const timeSlotDuration = 60;
    const timeSlots = [];

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)
    const isDateDisabled = ({ date }) => {
        return date.getDay() === 0;
    };
    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth() - 1, today.getDate());
    const movingdiv = useRef(null);
    const move = () => {
        setShowTime(true)
        movingdiv?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className='flex'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center w-full px-5'>
                        <Calendar maxDate={maxDate} tileDisabled={isDateDisabled} minDate={new Date()} onChange={setDate} onClickDay={() => move()} />
                    </div>
                </div>
                <div className=' hidden lg:flex justify-center overflow-hidden text-2xl font-bold text-center lg:w-1/2 h-full py-20'>
                    <div>Choose your date & <br /> book your slot
                        <div className="relative w- pt-5 ">
                            <div className=" absolute w-full h-full" style={{ animation: "slide 2s ease-in-out infinite alternate" }}>
                                <span>
                                    <svg width="30" height="30" fill="currentColor" className="font-extrabold text-indigo-600" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Times mDiv={movingdiv} startTime={openingTime} price={Price} endTime={closingTime} showTime={showTime} date={date} />
        </>
    );
}

export default BookingCalendar







function Times({ showTime, date, startTime, endTime, price, mDiv }) {
    const [bookedTimes, setBookedTimes] = useState([])
    const [update, setUpdate] = useState(true)
    const timeSlots = []
    const gap = 60
    const startDate = new Date(`2000-01-01T${startTime}:00`);
    const endDate = new Date(`2000-01-01T${endTime}:00`);
    const duration = endDate - startDate;
    const numSlots = Math.floor(duration / (gap * 60 * 1000));
    const { id } = useParams()
    useEffect(() => {
        date && bookedSlots(date)
    }, [date, update])
    const bookedSlots = async (date) => {
        const response = await getBookedSlots(date, id)
        if (response?.status === 200) {
            const bookedTimes = response.data.map((x) => x.time)
            setBookedTimes(bookedTimes)
        }
    }
    for (let i = 0; i < numSlots; i++) {
        const slotTime = new Date(startDate.getTime() + (i * gap * 60 * 1000));
        let time = slotTime.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' });
        if (time.split(':')[0].length === 1) time = '0' + time;
        timeSlots.push(time);
    }



    return (
        <>
            {showTime && (
                <div className="w-full  md:px-20 py-5">
                    <div className='text-3xl tracking-widest py-9 font-bold w-full   text-center'>
                        <hr className='bg-indigo-600 mb-3 h-[2px]  animate-pulse border-0' />
                        Available Time Slots
                        <hr className='bg-indigo-600 mt-3 h-[2px] animate-pulse border-0' />
                    </div>
                    <div ref={mDiv} className='flex px-3 mb-2 justify-between text-gray-400'>
                        <p> Time Slots </p> <p> Price </p> <p> Available </p>
                    </div>
                    {timeSlots.map((times, index) => {
                        return (
                            <div key={index}>
                                {!bookedTimes.includes(times) ?
                                    <BookNow date={date} time={times} price={price}  /> :
                                    <Booked times={times} price={price} />
                                }
                            </div>
                        )
                    })}
                </div >)
            }
        </>

    )
}
import { loadStripe } from "@stripe/stripe-js";
import { payementAction } from "../../../../API/ServerRequests/Bookings/bookingApi";


const Modal = ({ setModal, date, time }) => {


    return (
        <>
            <div className='fixed inset-x-0 sm:inset-0  transition'></div>
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-80 transition"></div>
            </div>
            <div className='w-full grid place-items-center'>
                <div className='absolute  shadow-xl transform transition-all'>
                    <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
                        <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-4 fill-current shrink-0 text-violet-400">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                <rect width="32" height="136" x="240" y="112"></rect>
                                <rect width="32" height="32" x="240" y="280"></rect>
                            </svg> {date.toLocaleDateString()}  <span className='mx-3 font-extrabold'>-</span>{time}
                        </h2>
                        <p className="flex-1 text-gray-400">You have selected the time slot of {time} for one hour on {date.toLocaleDateString()}. Please complete the payment to finalize your booking. </p>
                        <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                            <button onClick={() => setModal(false)} className="px-6 py-2 hover:opacity-50'} rounded-sm">Cancel</button>
                            <Payment date={date} time={time} setModal={setModal} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

const BookNow = ({ time, date, price }) => {
    const [modal, setModal] = useState(false)

    const booking = () => {
        setModal(true)
    }
    return (
        <> {modal && <Modal date={date} time={time} setModal={setModal} />}
            <div className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 " >
                <p> {time} </p>
                <p>₹ {price}</p>
                <button className='bg-green-500 h-full p-[10px] rounded-md' onClick={booking}>Book Now</button>
            </div>
        </>
    )
}

const Booked = ({ times, price }) => (
    <div className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 " >
        <p> {times} </p>
        <p>₹ {price}</p>
        <button className='bg-red-500 cursor-not-allowed h-full px-5 p-[10px] rounded-md'>Booked</button>
    </div>
)

const Payment = ({ setModal, date, time }) => {
    const token = useSelector((store) => store?.auth?.token);
    const { id } = useParams()
    const stripePromise = loadStripe(`${process.env.REACT_APP_YOUR_STRIPE_PUBLIC_KEY}`);
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const payment = async () => {
        setLoad(true)
        if (token) {
            const response = await bookSlot({ date, time, turf: id }, token)
            if (response?.status === 200) {
                const stripe = await stripePromise;
                const result = await payementAction(response?.data?.booking_id);
                if (result?.status === 200) {
                    setModal(false)
                    const news = await stripe.redirectToCheckout({ sessionId: result.data.response });
                    console.log(news)
                    alert('hi')
                } else errorSwal()
            } else errorSwal()
        } else navigate('/login')
    }
    return (
        <button disablloaded={load} onClick={payment} className={`flex justify-center items-center rounded-sm shadow-sm bg-violet-500 ${load ? 'cursor-not-allowed py-0 px-4' : 'py-2 px-6  hover:bg-violet-400 transition'}  text-gray-50 font-bold`}>
            Proceed to Payment
            {load &&
                <svg aria-hidden="true" className="w-6 h-4 ml-2 text-gray-200 animate-spin fill-violet-400 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>}
        </button>
    )
}