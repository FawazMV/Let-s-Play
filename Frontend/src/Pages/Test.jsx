// import { useState } from 'react';
// import 'react-calendar/dist/Calendar.css'
// import Calendar from 'react-calendar';

// const Test = () => {
//     const [date, setDate] = useState(new Date());
//     const [showTime, setShowTime] = useState(false)
//     const isDateDisabled = ({ date }) => {
//         return date.getDay() === 0 || date.getDay() === 6; // Disable Sundays and Saturdays
//     };



//     return (
//         <div className='app'>
//             <h1 className='header'>React Calendar</h1>
//             <div>
//                 <Calendar tileDisabled={isDateDisabled} minDate={new Date()} onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
//             </div>

//             {date.length > 0 ? (
//                 <p>
//                     <span>Start:</span>
//                     {date[0].toDateString()}
//                     &nbsp;
//                     &nbsp;
//                     <span>End:</span>{date[1].toDateString()}
//                 </p>
//             ) : (
//                 <p>
//                     <span>Default selected date:</span>{date.toDateString()}
//                 </p>
//             )
//             }
//             <Time showTime={showTime} date={date} />

//         </div>
//     )
// }

// export default Test



// import React from 'react'

// function Time({ showTime, date }) {

//     return (
//         <div>
//             {showTime ? <Times date={date} /> : null}
//         </div>
//     )
// }




// const time = ['08:00', '09:00', '10:00', '14:00', '15:00']

// function Times({ date }) {

//     const [event, setEvent] = useState(null)
//     const [info, setInfo] = useState(false)

//     function displayInfo(e) {
//         setInfo(true);
//         setEvent(e.target.innerText);
//     }

//     return (

//         <div className="times">
//             {time.map(times => {
//                 return (
//                     <div>
//                         <button onClick={(e) => displayInfo(e)}> {times} </button>
//                     </div>
//                 )
//             })}
//             <div>
//                 {info ? `Your appointment is set to ${event} ${date.toDateString()}` : null}
//             </div>
//         </div>
//     )
// }


import { useState } from "react";

function Test() {
    return (
<div className="p-32">        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-8">
            <div className="relative w-2/3 md:w-1/2 lg:w-1/3 aspect-w-3 aspect-h-5 rounded-md border-2 border-gray-700 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left translate-x-0 transition-all duration-1000 hover:translate-x-full"></div>
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
                    <h1 className="text-white font-cursive text-3xl md:text-4xl lg:text-5xl">
                        Magic Card
                    </h1>
                </div>
            </div>
            <a
                href="https://mythrillfiction.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-white font-semibold text-xl"
            >
                Mythrill
            </a>
        </div></div>


    );
}
export default Test