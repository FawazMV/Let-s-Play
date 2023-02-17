import React, { useState } from "react";
import { ValidateTurfRegistration } from "../../../../Helpers/ValidateForm";
import { EmailCheck, register } from '../../../../API/TurfAuth'
import ContactInfo from "./ContactInfo";
import { TurfRegistrationDiv as FormDiv, initialState, errorState } from "../../../constats";
import Otp from "./Otp";






// const LocationSearch = () => {
//     const [query, setQuery] = useState('');
//     const [locations, setLocations] = useState([]);
//     const token = "pk.eyJ1IjoiZmF3YXptdiIsImEiOiJjbGU3bjRicGYwNzJpM3ZuYmQ4Njd1MzdqIn0.T0K_SA2RGYeL9XzOdBXLYg"

//     const handleQueryChange = (event) => {
//         setQuery(event.target.value);
//         axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&components=country:in&types=establishment&key=${token}`)
//             .then((response) => {
//                 console.log(response.data.features)
//                 setLocations(response.data.features);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     const handleSearch = () => {
//         axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${token}`)
//             .then((response) => {
//                 setLocations(response.data.features);
//                 const context = response.data.features[0].context
//                 let district = null;
//                 for (const item of context) {
//                     if (item.id.includes('district')) {
//                         district = item.text;
//                         break;
//                     }
//                 }

//                 console.log(district);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     return (
//         <div>
//             <input type="text" value={query} onChange={handleQueryChange} />
//             <button onClick={handleSearch}>Search</button>
//             {locations.map((location) => (
//                 <div key={location.id}>
//                     <p>{location.place_name}</p>
//                     {/* <p>{location?.context[0]?.text}, {location.context[1].text}</p> */}
//                 </div>
//             ))}
//         </div>
//     );
// };
// ;

import { Location_Search, err } from "../../../../API/Others";

const LocationSearch = ({ formLocation ,err}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const textChange = async (event) => {
        setSearchTerm(event.target.value);
        const results = Location_Search(searchTerm);
        setSearchResults(results);
    };

    const handleLocationSelect = (result) => {
        setSearchTerm(result.text)
        setSearchResults([])
        const context = result.context
        let distric = null;
        let state = null;
        for (const x of context) {
            if (x.id.includes('district')) distric = x.text;
            if (x.id.includes('state')) state = x.text;
        }
        formLocation({
            location: result.text,
            distric, state
        })
    };

    return (
        <div className="">
            <div className="mb-4" >
                <label className="block text-gray-600 font-semibold mb-2" htmlFor='location'>Location</label>
                <input type="text" value={searchTerm} onChange={textChange} placeholder="Enter location name" id="location"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${err ? "border-red-500" : ""}`} />
                <p className="text-red-500 text-xs italic">{err}</p>
            </div>

            <ul className="mt-4 w-full max-w-md border border-gray-400 rounded-md overflow-hidden">
                {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleLocationSelect(result)} className="px-3 py-2 cursor-pointer border-b-2 hover:bg-gray-200">
                        <span className="text-lg font-bold">{result.text}</span> <br />
                        {result.place_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}



const Form = () => {

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [registerError, setRegisterError] = useState('')
    const [imagess, setImages] = useState([]);
    const [otp, setOtp] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const updateLocation = (obj) => {
        setFormData({
            ...formData, ...obj
        });
    };

    const validate = () => {
        const err = ValidateTurfRegistration(formData, imagess)
        setErrors(err);
        if (Object.keys(err).length) return false;
        return true;
    }
    const Registration = () => {
        const form = new FormData(event.target);
        register(form).then(() => setFormData(initialState))
            .catch(error => setRegisterError(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            EmailCheck(formData.email, formData.mobile).then(() => setOtp(true))
                .catch((err) => setRegisterError(err))
        }
    };

    return (
        <>
            {otp ? <Otp number={formData.mobile} modal={setOtp} Registration={Registration} /> : ''}
            <div className="md:px-32 lg:py-20 sm:px-20 px-5 py-10 ">
                <div className="grid grid-cols-12 gap-4">
                    <div className="lg:col-span-8 col-span-12">
                        <div className="md:px-20 xl:px-36 px-10 py-10">
                            <h1 className="font-bold text-3xl mb-7">PATNERSHIP FORM</h1>
                            <form className="w-full" onClick={() => setErrors(errorState)} onSubmit={handleSubmit}>
                                {
                                    FormDiv.map(val => (
                                        <div className="mb-4" key={`div${val.id}`} >
                                            <label className="block text-gray-600 font-semibold mb-2" htmlFor={`${val.id}`}>{val.label}</label>
                                            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[val.id + 'Error'] ? "border-red-500" : ""}`}
                                                id={`${val.id}`} type="text" name={`${val.id}`} placeholder={`${val.placeholder}`} value={formData[val.id]} onChange={handleChange} />
                                            <p className="text-red-500 text-xs italic">{errors[val.id + 'Error']}</p>
                                        </div>
                                    ))
                                }
                                <LocationSearch formLocation={updateLocation} err={errors.location} />
                                <div className="mb-4" key='img' >
                                    <label className="block text-gray-600 font-semibold mb-2" htmlFor='img'>Turf Images</label>
                                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imgError ? "border-red-500" : ""}`}
                                        id='img' type="file" name='images' placeholder='Add Turf Images' multiple onChange={(e) => {
                                            setImages(Array.from(event.target.files));
                                        }} />
                                    <p className="text-red-500 text-xs italic">{errors.imgError}</p>
                                </div>
                                <div className="mb-3 text-red-600 text-sm text-center">{registerError}</div>
                                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <ContactInfo />
                </div>
            </div>

        </>

    );
};

export default Form;

