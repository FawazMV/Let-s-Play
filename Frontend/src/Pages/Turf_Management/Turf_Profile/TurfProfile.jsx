import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getTurfProfile, updateTurfDetails } from "../../../API/ServerRequests/Turf/TurfsApi";
import { FormValidate } from "../../../utils/Helpers/ValidateForm";
import { successSwal } from "../../../utils/Helpers/Swal";

const TurfPorfile = () => {
    const [details, setDetails] = useState({ courtName: '', loction_Details: '', Holiday: '', Price: '', enquiryNumber: '', openingTime: '', closingTime: '' })
    const [images, setImages] = useState([]);
    const [editing, setEditing] = useState(false);
    const [errors, setErrors] = useState({});
    const [update, setUpdate] = useState(false)

    const token = useSelector((store) => store.turfAuth.token);
    useEffect(() => {
        token && getTurfDetails()
    }, [token, update])
    const getTurfDetails = () => {
        getTurfProfile(token)
            .then((details) => {
                setDetails(details)
                setImages(details?.images)
                console.log(details)
            }).catch((err) => console.log(err))

    }

    const handleInputChange = (event) => {
        setDetails({
            ...details,
            [event.target.name]: event.target.value,
        });
    };





    const handleUpdate = () => {
        const err = FormValidate(details)
        setErrors(err)
        if (Object.keys(err).length) return
        updateTurfDetails(details, token).then(() => {
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
                    <form >
                        <div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Court Name</label>
                                    <input name="courtName" className={`border w-full p-2 rounded ${errors.courtName ? 'border-red-500' : 'border-gray-400'}`} type="text" value={details.courtName} onChange={handleInputChange} />
                                    {errors.courtName && <p className="text-red-500 capitalize mt-1">{errors.courtName}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Enquiry Number</label>
                                    <input className={`border w-full p-2 rounded ${errors.enquiryNumber ? 'border-red-500' : 'border-gray-400'}`} name="enquiryNumber" type="text" value={details.enquiryNumber} onChange={handleInputChange} />
                                    {errors.enquiryNumber && <p className="text-red-500 capitalize mt-1">{errors.enquiryNumber}</p>}
                                </div>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Default Price</label>
                                    <input className={`border w-full p-2 rounded ${errors.Price ? 'border-red-500' : 'border-gray-400'}`} name="Price" type="text" value={details.Price} onChange={handleInputChange} />
                                    {errors.Price && <p className="text-red-500 capitalize mt-1">{errors.Price}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Default Holiday</label>
                                    <input className={`border w-full p-2 rounded ${errors.Holiday ? 'border-red-500' : 'border-gray-400'}`} name='Holiday' type="text" value={details.Holiday} onChange={handleInputChange} />
                                    {errors.Holiday && <p className="text-red-500 capitalize mt-1">{errors.Holiday}</p>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Location Details</label>
                                <input className={`border w-full p-2 rounded ${errors.loction_Details ? 'border-red-500' : 'border-gray-400'}`} type="text" name="loction_Details" value={details.loction_Details} onChange={handleInputChange} />
                                {errors.loction_Details && <p className="text-red-500 capitalize mt-1">{errors.loction_Details}</p>}
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Opening Time</label>
                                    <input name="openingTime" className={`border w-full p-2 rounded ${errors.openingTime ? 'border-red-500' : 'border-gray-400'}`} type="time" value={details.openingTime} onChange={handleInputChange} />
                                    {errors.openingTime && <p className="text-red-500 capitalize mt-1">{errors.openingTime}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Closing Time</label>
                                    <input name="closingTime" className={`border w-full p-2 rounded ${errors.closingTime ? 'border-red-500' : 'border-gray-400'}`} type="time" value={details.closingTime} onChange={handleInputChange} />
                                    {errors.closingTime && <p className="text-red-500 capitalize mt-1">{errors.closingTime}</p>}
                                </div>
                                {/* <div className="mb-4">
                                    <label className="block font-semibold mb-2">Intervals</label>
                                    <input className="border w-full p-2 rounded" type="text" value={details.interval} onChange={handleInputChange} />
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
                    </form>
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
        </div >
    );



}

export default TurfPorfile


