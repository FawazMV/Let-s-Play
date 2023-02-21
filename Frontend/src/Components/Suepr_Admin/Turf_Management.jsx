
import React from 'react';

const Turf_Managementt = ({ turfs }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="font-bold text-2xl mb-4">Turf Management</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turfs.map(turf => (
                                <tr key={turf.id}>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.name}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.location}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.email}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.phone}</div>
                                    </td>
                                    <td className="border px-4 py-2 flex justify-center items-center">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-full sm:w-auto">
                                            Manage
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 w-full sm:w-auto">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


const turfs = [
    {
        id: 1,
        name: 'Turf A',
        location: '123 Main St',
        email: 'turf-a@example.com',
        phone: '555-1234',
    },
    {
        id: 2,
        name: 'Turf B',
        location: '456 Elm St',
        email: 'turf-b@example.com',
        phone: '555-5678',
    },
];

const Turf_Management = () => {
    return (
        <div className="container mx-auto py-8">
            <Turf_Managementt turfs={turfs} />
        </div>
    );
};

export default Turf_Management;

