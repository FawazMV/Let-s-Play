

import React, { useEffect, useState } from 'react';

const Turfs = ({ courtName, location, locationDetails, rating, reviews, images, type, mobile, loction_Details, distric, event, openingTime, Price, closingTime, Holiday }) => {

    return (
        <>
            <div className="bg-white  w-full sm:px-10 md:px-32 lg:px-60 xl:px-80 py-6 mb-4">
                <PhotoManagement photos={images} />
                <div className='px-11 xl:px-28 py-5 w-full'>
                    <div className="w-full flex justify-between">
                        <h2 className='font-extrabold text-3xl uppercase tracking-widest'>{courtName}</h2>
                        <p className='font-bold mt-2'>( {event} )</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='mt-1 font-semibold'>{location} , {distric}</p>
                        <p className='mt-1 font-normal text-gray-700'>{loction_Details}</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className="mt-2">
                            <StarRating rating={rating} />
                        </div>
                        <p className='mt-2 flex font-light text-sm'>
                            <svg width="14" height="14" fill="currentColor" className="mr-2 mt-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            {mobile}
                        </p>

                    </div>


                </div>
            </div>
            <div className='bg-white  w-full px-3 sm:px-5 md:px-20 lg:px-44 xl:px-[200px] py-6 mb-4'>
                <ProductTabs bookings={{ openingTime, Price, closingTime, Holiday }} reviews={reviews} />
            </div>
        </>

    );
}

const PhotoManagement = ({ photos }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage((currentImage - 1 + photos.length) % photos.length);
    };

    const handleNextClick = () => {
        setCurrentImage((currentImage + 1) % photos.length);
    };
    return (
        <div className="flex pt-10">
            <button className="m-3 xl:m-10 text-gray-500" onClick={handlePrevClick} >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </button>
            <img className="w-full max-h-[400px] lg:min-h-[400px] lg:min-w-[400px] shadow-2xl rounded-lg" src={photos[currentImage]?.location} alt={`Photo ${currentImage}`} />
            <button className="m-3 xl:m-10 text-gray-500" onClick={handleNextClick}  >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
    )
}




const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const remainingStars = Math.floor(5 - rating);
    const hasHalfStar = rating % 1 !== 0;
    const starIconFilled = 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z';
    const starIconEmpty = 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z';
    const starIconHalf = "M5.354 5.119 7.538 .792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
    return (
        <div className="flex items-center">
            {[...Array(filledStars)].map((_, index) => (
                <span className='mt-1' key={index}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-yellow-500">
                        <path d={starIconFilled} />
                    </svg>
                </span>
            ))}
            {hasHalfStar && (
                <span className='mt-1'>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-yellow-500">
                        <path d={starIconHalf} fill="10%" />
                    </svg>
                </span>
            )}
            {[...Array(remainingStars)].map((_, index) => (
                <span className='mt-1' key={index}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-300">
                        <path d={starIconEmpty} />
                    </svg>
                </span>
            ))}
            <span className="ml-2 text-sm">{rating}</span>
        </div>
    );
};





;
function ProductTabs({ reviews, bookings }) {
    const [activeTab, setActiveTab] = useState("details");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full shadow">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                    <button className={`${activeTab === "details"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                        } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm uppercase`}
                        onClick={() => handleTabClick("details")} > Book Your Spot
                    </button>
                    <button className={`${activeTab === "reviews"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                        } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm uppercase`}
                        onClick={() => handleTabClick("reviews")}  >  Reviews & Ratings
                    </button>
                </nav>
            </div>
            <div className="py-8 px-4">
                {activeTab === "details" && (
                    <div>
                        {/* <h2 className="text-lg font-medium text-gray-900">Book Your Spot</h2> */}
                        {/* Add product details content here */}
                        <Bookings bookings={bookings} />
                    </div>
                )}
                {activeTab === "reviews" && (
                    <div>
                        <h2 className="text-lg font-medium text-gray-900"> Reviews</h2>
                        {reviews.map((review) => {
                            return (
                                <div className="review bg-white rounded-lg p-4 shadow-md">
                                    <img className="author-image rounded-full w-10 h-10 mr-2" src={review.authorImage} alt={`${review.authorName}'s profile picture`} />
                                    <div className="author-name font-bold text-gray-700">{review.authorName}</div>
                                    <div className="comment text-gray-600">{review.comment}</div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

import { useParams } from 'react-router-dom';
import { getTurfDetails } from '../../../API/ServerRequests/Turf/TurfsApi';
const Bookings = ({ bookings }) => {
    const { openingTime, closingTime, Price, Holiday } = bookings;
    const timeSlotDuration = 60;
    const timeSlots = [];
    let numDays = 7;
    const dates = [];

    const startDate = new Date();
    startDate.setHours(parseInt(openingTime.split(":")[0]));
    startDate.setMinutes(parseInt(openingTime.split(":")[1]));
    const endDate = new Date();
    endDate.setHours(parseInt(closingTime.split(":")[0]));
    endDate.setMinutes(parseInt(closingTime.split(":")[1]));

    const amPm = (hours) => (hours >= 12 ? "PM" : "AM");

    const skipTimeSlots = ["11:00 AM to 12:00 PM", "3:00 PM to 4:00 PM"];

    for (let time = startDate; time <= endDate; time = new Date(time.getTime() + timeSlotDuration * 60 * 1000)) {
        const startHour12 = ((time.getHours() + 11) % 12) + 1;
        const endHour12 = ((time.getHours() + 12) % 12) + 1;
        const ampm = amPm(time.getHours());
        const openingTime = `${startHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
        const closingTime = `${endHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
        const timeSlot = `${openingTime} to ${closingTime}`;


        if (!skipTimeSlots.includes(timeSlot)) {
            timeSlots.push(timeSlot);
        }
    }

    for (let i = 0; i < numDays; i++) {
        const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
        const day = new Date(date).toLocaleString('en-US', { weekday: 'long' });
        if (day == Holiday) {
            numDays++
            continue
        }
        dates.push(date);
    }

    const handleCellClick = (dateIndex, timeIndex) => {
        const date = dates[dateIndex];
        const time = timeSlots[timeIndex];
        console.log(`Clicked on ${date.toLocaleDateString()} at ${time}`);
        alert(`Clicked on ${date.toLocaleDateString()} at ${time}`);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border-2 border-gray-800">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-1/4 py-2 px-12 md:px-4 border-2 border-gray-800">Time Slots</th>
                        {dates.map((date) => (
                            <th key={date.toISOString()} className="w-1/7 py-2 px-4 border-2 border-gray-800">
                                {date.toLocaleDateString()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time, timeIndex) => (
                        <tr key={time} className="border-2 border-gray-800">
                            <td className="w-1/4 py-2 px-4 border-2 border-gray-800">{time}</td>
                            {dates.map((date, dateIndex) => (
                                <td
                                    key={date.toISOString() + time}
                                    className="w-1/7 py-2 px-4 border-2 border-gray-800 cursor-pointer hover:bg-green-600 text-center bg-green-500"
                                    onClick={() => handleCellClick(dateIndex, timeIndex)}
                                >
                                    Book Now
                                    <br />
                                    <span className='font-semibold'> ₹ {Price}</span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const TurfDetails = () => {
    const { id } = useParams()
    const [turf, setTurf] = useState({
        rating: 0,
        reviews: [],
        images: [],
        openingTime: '00:00',
        closingTime: '00;00'
    })
    useEffect(() => {
        getTurfDetails(id).then(data => {
            setTurf({ ...turf, ...data, })
            console.log(turf)
        })

    }, [])

    return <div className='pt-20'> <Turfs {...turf} /></div>;
};

export default TurfDetails;

