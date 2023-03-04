

import React, { useState } from 'react';

const Turfs = ({ name, location, locationDetails, rating, reviews, photos, type, Number }) => {

    return (
        <>
            <div className="bg-white  w-full sm:px-10 md:px-32 lg:px-60 xl:px-80 py-6 mb-4">
                <PhotoManagement photos={photos} />
                <div className='px-11 xl:px-28 py-5 w-full'>
                    <div className="w-full flex justify-between">
                        <h2 className='font-extrabold text-3xl uppercase tracking-widest'>{name}</h2>
                        <p className='font-bold mt-2'>( {type} )</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='mt-1 font-semibold'>{location}</p>
                        <p className='mt-1 font-normal text-gray-700'>{locationDetails}</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className="mt-2">
                            <StarRating rating={rating} />
                        </div>
                        <p className='mt-2 flex font-light text-sm'>
                            <svg width="14" height="14" fill="currentColor" className="mr-2 mt-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            {Number}
                        </p>

                    </div>


                </div>
            </div>
            <div className='bg-white  w-full px-3 sm:px-5 md:px-20 lg:px-44 xl:px-[200px] py-6 mb-4'>
                <ProductTabs reviews={reviews} />
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
            <img className="w-full max-h-[400px] lg:min-h-[400px] lg:min-w-[400px] shadow-2xl rounded-lg" src={photos[currentImage]} alt={`Photo ${currentImage}`} />
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
function ProductTabs({ reviews }) {
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
                        <h2 className="text-lg font-medium text-gray-900">Book Your Spot</h2>
                        {/* Add product details content here */}
                        <Bookings />
                    </div>
                )}
                {activeTab === "reviews" && (
                    <div>
                        <h2 className="text-lg font-medium text-gray-900">Product Reviews</h2>
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
function Bookings() {
    const startTime = "10:00";
    const endTime = "16:00";
    const timeSlotDuration = 60;
    const timeSlots = [];
    const numDays = 7;
    const dates = [];

    const startDate = new Date();
    startDate.setHours(parseInt(startTime.split(":")[0]));
    startDate.setMinutes(parseInt(startTime.split(":")[1]));
    const endDate = new Date();
    endDate.setHours(parseInt(endTime.split(":")[0]));
    endDate.setMinutes(parseInt(endTime.split(":")[1]));

    const amPm = (hours) => (hours >= 12 ? "PM" : "AM");

    // Define an array of time slots to skip
    const skipTimeSlots = ["11:00 AM to 12:00 PM", "3:00 PM to 4:00 PM"];

    for (let time = startDate; time <= endDate; time = new Date(time.getTime() + timeSlotDuration * 60 * 1000)) {
        const startHour12 = ((time.getHours() + 11) % 12) + 1;
        const endHour12 = ((time.getHours() + 12) % 12) + 1;
        const ampm = amPm(time.getHours());
        const startTime = `${startHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
        const endTime = `${endHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
        const timeSlot = `${startTime} to ${endTime}`;

        // Check if the current time slot should be skipped
        if (!skipTimeSlots.includes(timeSlot)) {
            timeSlots.push(timeSlot);
        }
    }

    for (let i = 0; i < numDays; i++) {
        const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
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
            <table className="table-auto w-full border-collapse border-2 border-gray-500">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-1/4 py-2 px-4 border-2 border-gray-500">Time</th>
                        {dates.map((date) => (
                            <th key={date.toISOString()} className="w-1/7 py-2 px-4 border-2 border-gray-500">
                                {date.toLocaleDateString()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time, timeIndex) => (
                        <tr key={time} className="border-2 border-gray-500">
                            <td className="w-1/4 py-2 px-4 border-2 border-gray-500">{time}</td>
                            {dates.map((date, dateIndex) => (
                                <td
                                    key={date.toISOString() + time}
                                    className="w-1/7 py-2 px-4 border-2 border-gray-500 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleCellClick(dateIndex, timeIndex)}
                                >
                                    Booked
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
        name: 'My Turf',
        Number: 9072879663,
        type: 'Football',
        location: 'Anytown ,  USA',
        locationDetails: 'Located next to the park',
        rating: 3.9,
        reviews: [
            {
                authorName: "John Doe",
                authorImage: "https://via.placeholder.com/50",
                comment: "Great stadium, amazing atmosphere!"
            },
            {
                authorName: "Jane Smith",
                authorImage: "https://via.placeholder.com/50",
                comment: "The best place to watch a game in Trivandrum."
            }
        ],
        photos: [
            'https://media.istockphoto.com/id/520999573/photo/indoor-soccer-football-field.jpg?s=612x612&w=0&k=20&c=X2PinGm51YPcqCAFCqDh7GvJxoG2WnJ19aadfRYk2dI=',
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,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',
        ]
    })


    return <div className='pt-20'> <Turfs {...turf} /></div>;
};

export default TurfDetails;

