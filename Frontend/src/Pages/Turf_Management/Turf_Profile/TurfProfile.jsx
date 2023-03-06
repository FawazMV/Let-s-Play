import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getTurfProfile, updateTurfDetails } from "../../../API/ServerRequests/Turf/TurfsApi";
import { FormValidate } from "../../../utils/Helpers/ValidateForm";
import { successSwal } from "../../../utils/Helpers/Swal";

const TurfPorfile = () => {
    const [details, setDetails] = useState({})
    const [editData, setEditData] = useState({ courtName: '', loction_Details: '', Holiday: '', Price: '', enquiryNumber: '', openingTime: '', closingTime: '' })
    const [images, setImages] = useState([]);
    const [editing, setEditing] = useState(false);
    const [errors, setErrors] = useState({});
    const [update, setUpdate] = useState(true);


    const token = useSelector((store) => store.turfAuth.token);
    useEffect(() => {
        token && getTurfDetails()
    }, [token, update])
    const getTurfDetails =  () => {
        getTurfProfile(token)
            .then((details) => {
                setDetails(details)
                setImages(details?.images)
                console.log(details)
                const { courtName, loction_Details, Holiday, Price, enquiryNumber, closingTime ,openingTime} = details
                setEditData({ ...editData, courtName, loction_Details, Holiday, Price, enquiryNumber, closingTime ,openingTime})
            }).catch((err) => console.log(err))

    }

    const handleInputChange = (event) => {
        setEditData({
            ...editData,
            [event.target.name]: event.target.value,
        });
    };





    const handleUpdate = () => {
        const err = FormValidate(editData)
        setErrors(err)
        if (Object.keys(err).length) return
        updateTurfDetails(editData, token).then(() => {
            successSwal('Turf details updated')
            setEditing(false)
            setUpdate(!update)
        }).catch(err => console.error(err))
    };

    return (
        <div className="container mx-auto pt-28 p-4">
            <div className="mb-4 flex justify-center items-center">
                <h1 className="text-4xl text-gray-700 font-semibold">{details?.courtName}</h1>

            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2">Default Details</h2>
                <div className="bg-white p-4 md:flex md:justify-between md:px-10 rounded shadow">
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Email</label>
                        <p className="text-gray-700">{details?.email}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Phone</label>
                        <p className="text-gray-700">{details?.mobile}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Location</label>
                        <p className="text-gray-700">{details?.location}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Sports Type</label>
                        <p className="text-gray-700">{details?.event}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Additional Details</h2>
                <div className="bg-white p-4 rounded shadow">
                    {editing && (
                        <div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Court Name</label>
                                    <input name="courtName" className={`border w-full p-2 rounded ${errors.courtName ? 'border-red-500' : 'border-gray-400'}`} type="text" value={editData.courtName} onChange={handleInputChange} />
                                    {errors.courtName && <p className="text-red-500 capitalize mt-1">{errors.courtName}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Enquiry Number</label>
                                    <input className={`border w-full p-2 rounded ${errors.enquiryNumber ? 'border-red-500' : 'border-gray-400'}`} name="enquiryNumber" type="text" value={editData.enquiryNumber} onChange={handleInputChange} />
                                    {errors.enquiryNumber && <p className="text-red-500 capitalize mt-1">{errors.enquiryNumber}</p>}
                                </div>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Default Price</label>
                                    <input className={`border w-full p-2 rounded ${errors.Price ? 'border-red-500' : 'border-gray-400'}`} name="Price" type="text" value={editData.Price} onChange={handleInputChange} />
                                    {errors.Price && <p className="text-red-500 capitalize mt-1">{errors.Price}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Default Holiday</label>
                                    <input className={`border w-full p-2 rounded ${errors.Holiday ? 'border-red-500' : 'border-gray-400'}`} name='Holiday' type="text" value={editData.Holiday} onChange={handleInputChange} />
                                    {errors.Holiday && <p className="text-red-500 capitalize mt-1">{errors.Holiday}</p>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Location Details</label>
                                <input className={`border w-full p-2 rounded ${errors.loction_Details ? 'border-red-500' : 'border-gray-400'}`} type="text" name="loction_Details" value={editData.loction_Details} onChange={handleInputChange} />
                                {errors.loction_Details && <p className="text-red-500 capitalize mt-1">{errors.loction_Details}</p>}
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Opening Time</label>
                                    <input name="openingTime" className={`border w-full p-2 rounded ${errors.openingTime ? 'border-red-500' : 'border-gray-400'}`} type="time" value={editData.openingTime} onChange={handleInputChange} />
                                    {errors.openingTime && <p className="text-red-500 capitalize mt-1">{errors.openingTime}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Closing Time</label>
                                    <input name="closingTime" className={`border w-full p-2 rounded ${errors.closingTime ? 'border-red-500' : 'border-gray-400'}`} type="time" value={editData.closingTime} onChange={handleInputChange} />
                                    {errors.closingTime && <p className="text-red-500 capitalize mt-1">{errors.closingTime}</p>}
                                </div>
                                {/* <div className="mb-4">
                                    <label className="block font-semibold mb-2">Intervals</label>
                                    <input className="border w-full p-2 rounded" type="text" value={editData.interval} onChange={handleInputChange} />
                                </div> */}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Images</label>
                                <div className="flex">
                                    {images.map((img, index) => (
                                        <img key={index} src={img.location} alt='' className="w-20 h-20 object-cover mr-2 rounded" />
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                    {!editing && (
                        <div className="sm:px-5">
                            <div className="sm:flex justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Court Name</label>
                                    <p className="text-gray-700">{details?.courtName}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Enquiry Number</label>
                                    <p className="text-gray-700">{details?.enquiryNumber}</p>
                                </div>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Price For One Time Slot</label>
                                    <p className="text-gray-700">₹{details?.Price}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Default Holiday</label>
                                    <p className="text-gray-700">{details?.Holiday}</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Location Details</label>
                                <p className="text-gray-700">{details?.loction_Details}</p>
                            </div>

                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Opening Time</label>
                                    <p className="text-gray-700">{details?.openingTime}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Closing Time</label>
                                    <p className="text-gray-700">{details?.closingTime}</p>
                                </div>
                                {/* <div className="mb-4">
                                    <label className="block font-semibold mb-2">Intervals</label>
                                    <p className="text-gray-700">{details?.interval}</p>
                                </div> */}
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Images</label>
                                <div className="flex flex-wrap">
                                    {images.map((img, index) => (
                                        <img key={index} src={img.location} alt="" className="w-auto h-40 p-2 object-cover mr-2 rounded" />
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                    <div className="flex justify-end">
                        {!editing && (
                            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded" onClick={() => setEditing(true)}>
                                Edit
                            </button>
                        )}
                        {editing && (
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate}>
                                Save
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );



}

export default TurfPorfile


