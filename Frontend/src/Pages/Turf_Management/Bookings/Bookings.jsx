import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getBookedDetails } from "../../../API/ServerRequests/Turf/TurfsApi"

const Bookings = () => {

    const [bookings, setBookings] = useState([])

    const token = useSelector(store => store.turfAuth.token)
    useEffect(() => {
        token && getBookedTurfs()
    }, [token])

    const getBookedTurfs = async () => {
        const response = await getBookedDetails(token)
        if (response.status === 200) setBookings(response.data)
        else console.log(response.data)
    }

    return (
        <div className="bg-slate-800 min-h-screen  md:px-10 lg:px-24 pt-20">

            <h1 className="text-white text-3xl font-bold p-5"> Bookings</h1>


            <div className="bg-slate-90tive overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase text-gray-400">
                        <tr className=" border-b border-gray-70">
                            <th scope="col" className="px-6 pl-10 py-3 bg-gray-800">
                                User
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Booking Id
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3 bg-gray-800">
                                Date
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Mobile
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking._id} className="border-b border-gray-700">

                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                                    {booking.user.username}
                                </th>
                                <td className="px-6 py-4">
                                    {booking._id}
                                </td>
                                <td className="px-6 py-4 bg-gray-800">
                                    {new Date(booking?.bookDate).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    {booking.time}
                                </td>
                                <td className="px-6 py-4">
                                    {booking.user.mobile}
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>




        </div>
    )
}

export default Bookings

