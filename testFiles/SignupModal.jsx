import React, { useState } from "react";
import OtpForm from "../Frontend/src/Pages/USER/Layout/OtpForm";
import { Signup, Login } from '../Frontend/src/API/UserAuth'
import { ValidateSignupForm } from "../Frontend/src/Helpers/ValidateForm";
import { useDispatch } from 'react-redux'
import { setToken } from "../Frontend/src/utils/Redux/AuthSlice";
const SignupModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({ username: "", email: "", password: "", mobile: "" });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('')
    const [otpform, setOtpform] = useState(false);
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const validateForm = () => {
        const newErrors = ValidateSignupForm(formData, isLogin)
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const updateOTPForm = () => {
        setOtpform(false)
        setIsLogin(true)
    }
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        if (isLogin) {
            Login(formData).then((data) => {
                dispatch(setToken(data))
                localStorage.setItem('token', data);
                setIsOpen(false)
            })
                .catch(error => setApiError(error));
        } else {
            Signup(formData).then(() => setOtpform(true))
                .catch(err => setApiError(err))
        };
    }

    return (
        <>
            <button
                className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
                onClick={() => setIsOpen(true)}>Get Started
            </button>
            {isOpen && (
                <div className="fixed bottom-40 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center transition sm:justify-center">
                    <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    {!otpform ? <div className="bg-white px-6 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">

                        <div className="flex justify-evenly">
                            <h2 className="text-2xl font-[Poppins] font-bold pt-5 pb-3 sm:p-6 sm:pb-4">{isLogin ? "Sign In" : "Sign Up"} </h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="bg-white px-4 pt-4 pb-4 sm:p-4 sm:pb-2">
                                <div className={`mb-3 ${isLogin ? 'hidden' : ''}`}>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="username">User Name</label>
                                    <input autoComplete="off" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors?.username ? "border-red-500" : ""}`}
                                        id="username" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                                    {errors.username && (<p className="text-red-500 text-xs italic"> {errors.username}</p>)}
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                                    <input autoComplete="off" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors?.email ? "border-red-500" : ""}`}
                                        id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                                    {errors.email && (<p className="text-red-500 text-xs italic">{errors.email}</p>)}
                                </div>
                                <div className={`mb-3 ${isLogin ? 'hidden' : ''}`}>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">Mobile Number</label>
                                    <input autoComplete="off" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors?.mobile ? "border-red-500" : ""}`}
                                        id="mobile" type="" name="mobile" value={formData.mobile} onChange={handleInputChange} />
                                    {errors.mobile && (<p className="text-red-500 text-xs italic">{errors.mobile} </p>)}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                                    <input autoComplete="off" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
                                        id="password" type="password" name="password" value={formData.password} onChange={handleInputChange} />
                                    {errors.password && (<p className="text-red-500 text-xs italic">{errors.password}</p>)}
                                </div>
                                <div className="flex w-full justify-evenly">
                                    <p className="text-red-600">{apiError}</p>
                                </div>
                            </div>
                            <div className="flex justify-between px-4 py-3 sm:px-6 ">
                                <div className="text-sm text-blue-600 hover:underline cursor-pointer pt-2" onClick={() => {
                                    setIsLogin(!isLogin)
                                    setApiError('');
                                    setErrors({})
                                }}>
                                    {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
                                </div>
                                <div>
                                    <button type="submit"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent px-5 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                        {isLogin ? "Log In" : "Sign Up"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div> : <OtpForm formData={formData} updateForm={updateOTPForm} />}
                </div >
            )}


        </>
    )
}
export default SignupModal


