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
        return date.getDay() === 3; // Disable Sundays and Saturdays
    };
    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth() - 1, today.getDate());


    const amPm = (hours) => (hours >= 12 ? "PM" : "AM");

    const skipTimeSlots = ["11:00 AM to 12:00 PM", "3:00 PM to 4:00 PM"];
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

    const navigate = useNavigate()
    const token = useSelector((store) => store?.auth?.token);

    slotBooking = async (time) => {
        const result = await bookingConfirm(date.toLocaleDateString(), time)
        if (result) {
            if (token) {
                const response = await bookSlot({ date, time, turf: id }, token)
                if (response?.status === 200) {
                    bookingSuccess()
                    setUpdate(!update)
                } else errorSwal()
            } else navigate('/login')

        }
    }
    return (
        <>
            {showTime && (
                <div className="w-full  md:px-20 py-5">
                    <div className='text-3xl tracking-widest py-9 font-bold w-full   text-center'><hr className='bg-indigo-600 mb-3 h-[2px]  animate-pulse border-0' /> Available Time Slots <hr className='bg-indigo-600 mt-3 h-[2px] animate-pulse border-0' /></div>
                    <div ref={mDiv} className='flex px-3 mb-2 justify-between text-gray-400'>
                        <p>Time Slots</p>
                        <p>Price</p>
                        <p>Available</p>
                    </div>
                    <Modal />
                    {timeSlots.map((times, index) => {
                        return (
                            <div key={index}>
                                {!bookedTimes.includes(times) ?
                                    <div className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 " >
                                        <p> {times} </p>
                                        <p>₹ {price}</p>
                                        <button className='bg-green-500 h-full p-[10px] rounded-md' onClick={() => slotBooking(times)}>Book Now</button>
                                    </div> :
                                    <div className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 " >
                                        <p> {times} </p>
                                        <p>₹ {price}</p>
                                        <button className='bg-red-500 cursor-not-allowed h-full px-5 p-[10px] rounded-md'>Booked</button>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div >)
            }
        </>

    )
}



const Modal = () => {
    return (
        <div className='relative '>
            <div className='absolute h-[80vh] w-full grid place-items-center'>
                <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
                    <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 text-violet-400">
                            <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
                            <rect width="32" height="136" x="240" y="112"></rect>
                            <rect width="32" height="32" x="240" y="280"></rect>
                        </svg>Necessitatibus dolores quasi quae?
                    </h2>
                    <p className="flex-1 text-gray-400">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                        <button className="px-6 py-2 rounded-sm">No</button>
                        <button className="px-6 py-2 rounded-sm shadow-sm bg-violet-400 text-gray-900">Yes</button>
                    </div>
                </div>
            </div></div>
    )
}