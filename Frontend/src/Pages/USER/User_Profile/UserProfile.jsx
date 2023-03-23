import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserBookings, getUserDetails, updateProfile } from '../../../API/ServerRequests/User/UserApi';
import { errorSwal, successSwal } from '../../../utils/Helpers/Swal.js';
import ProfilePicture from './Components/ProfilePicture';
import ProfileDetails from './Components/ProfileDetails';
import PasswordUpdate from './Components/PasswordUpdate';
import LogoutButton from './Components/LogoutButton';

const UserProfile = () => {
    const [user, setUser] = useState({})
    const token = useSelector((store) => store.auth.token);
    useEffect(() => {
        token && getProfile()
    }, [token])
    const getProfile = async () => {
        const result = await getUserDetails(token)
        if (result?.status === 200) {
            const { email, mobile, username } = result.data
            setUser({ email, mobile, username })
        } else if (result?.status === 500) errorSwal(result.data.error)

    }
    const editProfile = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }
    const update = async (setIsEdit) => {
        const response = await updateProfile(user, token)
        if (response.status === 200) {
            successSwal(response.data.message)
            setIsEdit(false)
        } else if (response.status === 500) errorSwal(response.data.error)
    }


    return (
        <div className='pt-16 xs:pt-20  lg:pt-20 min-h-screen bg-gray-800'>
            <section className="mx-auto sm:p-4 container flex flex-col md:p-10 bg-gray-800 text-gray-50">
                <fieldset className="grid grid-cols-4 gap-6 p-14 rounded-md shadow-sm bg-gray-900">
                    <ProfilePicture user={user} />
                    <div className="space-y-2 col-span-full opacity-30 lg:hidden border-b-[1px] my-4" />
                    <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
                        <ProfileDetails editProfile={editProfile} update={update} user={user} />
                        <div className="col-span-full "> <hr className='mt-5 opacity-30 ' /></div>
                        <PasswordUpdate />
                        <LogoutButton />
                    </div>
                </fieldset>
            </section>
            <BookingDetails token={token} />
        </div>
    )
};

export default UserProfile;


const BookingDetails = (token) => {

    const [data, setData] = useState([])

    useEffect(() => {
        token && getUserBookingDetails()
    }, [token])
    const getUserBookingDetails = async () => {
        const response = await getUserBookings(token)
        if (response?.status === 200) setData(response.data)
        console.log(response.data)
    }

    return (
        <div className='bg-gray-800'>
            <section className="mx-auto sm:p-4 container flex flex-col md:p-10 bg-gray-800 text-gray-50">
                <fieldset className="grid grid-cols-4 gap-6 p-14 rounded-md shadow-sm bg-gray-900">
                    <span className='col-span-full text-center text-2xl font-bold'>Your Bookings</span>
                    <div className="col-span-full w-full overflow-x-auto">
                        <BookingList />
                    </div>
                </fieldset>
            </section>
        </div>
    )
}

import React from 'react';

const bookings = [
    {
        id: 1,
        date: '2022-04-01',
        time: '14:00',
        successful: true,
    },
    {
        id: 2,
        date: '2022-05-05',
        time: '10:30',
        successful: false,
    },
    {
        id: 3,
        date: '2022-06-07',
        time: '16:15',
        successful: true,
    },
];

const BookingList = () => {
    return (
        <div className='w-full'>
        <table className="max-w-4xl rounded-lg bg-white divide-y divide-gray-300 overflow-x-auto">
            <thead className="bg-gray-50">
                <tr className="text-gray-600 text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">Booking ID</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">Booked Date</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">Booked Time</th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-500">
                        <td className="px-6 py-4">{booking.id}</td>
                        <td className="px-6 py-4">{booking.date}</td>
                        <td className="px-6 py-4">{booking.time}</td>
                        <td className="px-6 py-4">
                            {booking.successful ? (
                                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 font-semibold">
                                    Successful
                                </span>
                            ) : (
                                <span className="inline-block bg-red-100 text-red-800 rounded-full px-3 py-1 font-semibold">
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
};


