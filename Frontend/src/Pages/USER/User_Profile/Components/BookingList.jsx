
const BookingList = ({ data }) => (
    <div className="w-full overflow-x-auto">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
            <thead className="bg-gray-700">
                <tr className="text-gray-100 text-left">
                    <th className="font-semibold text-sm uppercase px-24 py-4">Booking ID</th>
                    <th className="font-semibold text-sm uppercase px-14 py-4">Turf</th>
                    <th className="font-semibold text-sm uppercase px-5 py-4">Booked Date</th>
                    <th className="font-semibold text-sm uppercase px-4 py-4">Booked Time</th>
                    <th className="font-semibold text-sm uppercase px-12 py-4">Status</th>
                </tr>
            </thead>
            <tbody className="">
                {data.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-600 border-b border-opacity-60 border-gray-400 bg-gray-800">
                        <td className="px-6 py-4">#{booking._id}</td>
                        <td className="px-6 py-4">{booking.turf.courtName}</td>
                        <td className="px-6 py-4">{new Date(booking.bookDate).toLocaleDateString()}</td>
                        <td className="px-6 py-4">{booking.time}</td>
                        <td className="px-6 py-4">
                            {booking.payment === "Success" ? (
                                <span className="inline-block bg-green-500 text-gray-100 rounded-full px-4 py-1 font-semibold">
                                    Successful
                                </span>
                            ) : (
                                <span className="inline-block bg-red-500 text-gray-100 rounded-full px-8 py-1 font-semibold">
                                    Failed
                                </span>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


export default BookingList