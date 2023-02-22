
import React, { useEffect, useState } from 'react';
import { TurfsRequsted } from '../../API/AdminApi';

const Turf_Managementt = ({ turfs }) => {
    const [selectedTurf, setSelectedTurf] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    console.log(turfs   )
    const handleTurfClick = (turf) => {
        setSelectedTurf(turf);
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="font-bold text-2xl mb-4">Turf Management</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Sl No</th>
                                <th className="px-4 py-2">Court Name</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turfs.map((turf,index) => (
                                <tr className='relative' key={turf._id} onMouseEnter={() => {
                                    handleTurfClick(turf)
                                    setShowTooltip(true)
                                }} onMouseLeave={() => setShowTooltip(false)}>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{index+1}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.courtName}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.location}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.email}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.mobile}</div>
                                    </td>
                                    <td className="border px-4 py-2 flex justify-center items-center">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-full sm:w-auto">
                                            Accept
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 w-full sm:w-auto">
                                            Cancel
                                        </button>
                                    </td>
                                    {showTooltip && selectedTurf && selectedTurf._id === turf._id && (
                                        <div className="absolute bg-white shadow-md py-4 z-10 px-8  left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                                            <h2 className="text-lg font-bold mb-2">{selectedTurf.courtName}</h2>
                                            <img src={selectedTurf.images[0].location} alt="Turf" className="mb-2 h-10" />
                                            <p>{selectedTurf.loction_Details}</p>
                                            <div className='flex justify-between text-lg'>
                                                <p>{selectedTurf.distric}</p><p>{selectedTurf.state}</p>
                                            </div>
                                            
                                            <p>{selectedTurf.email}</p>
                                            <p>{selectedTurf.phone}</p>
                                        </div>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};




const Turf_Management = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        TurfsRequsted(123).then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container mx-auto py-8">
            <Turf_Managementt turfs={data} />
        </div>
    );
};

export default Turf_Management;
