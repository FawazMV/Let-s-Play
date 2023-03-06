import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateProfile } from '../../../API/ServerRequests/User/UserApi';
import avatar from '../../../assets/avatar.png'
import { FormValidate } from '../../../utils/Helpers/ValidateForm';
import { removeToken } from '../../../utils/Redux/AuthSlice';
import { useNavigate } from "react-router-dom";
import { errorSwal, successSwal } from '../../../utils/Helpers/Swal.js';

const UserProfile = () => {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const token = useSelector((store) => store.auth.token);
    useEffect(() => {
        token && getProfile()
    }, [token])
    const getProfile = async () => {
        const result = await getUserDetails(token)
        if (result.status === 200) {
            const { email, mobile, username } = result.data
            setUser({ email, mobile, username })
        } else if (result.status === 500) errorSwal(result.data.error)

    }
    const editProfile = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }
    const update = async () => {
        const err = FormValidate(user)
        setErrors(err);
        if (Object.keys(err).length === 0) {
            const response = await updateProfile(user, token)
            if (response.status === 200) {
                successSwal(response.data.message)
                setIsEdit(false)
            } else if (response.status === 500) errorSwal(result.data.error)
        }
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch(removeToken())
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <div className='pt-16 xs:pt-20  lg:pt-3 min-h-screen bg-gray-800 flex justify-center items-center'>
            <section className="sm:p-4 md:p-10 bg-gray-800 text-gray-50">
                <form action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-14 rounded-md shadow-sm bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Here you can edit and update your profile picture and details</p>
                            <div className="col-span-full">
                                {/* <label for="bio" className="text-sm">Photo</label> */}
                                <div className="flex pt-10 justify-center space-x-2">
                                    <img src={user.profile ? user.profile.location : avatar} alt={user.name} className="w-48 h-48 rounded-full bg-gray-800" />
                                    {/* <button type="button" className="px-4 py-2 border rounded-md border-gray-100">Change</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 col-span-full opacity-30 lg:hidden border-b-[1px] my-4" />
                        <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
                            {isEdit ?
                                <div onClick={update} className='col-span-full cursor-pointer flex justify-end'>
                                    <button type="button" className="font-semibold text-sm border rounded border-gray-100 px-2 py-[3] hover:bg-gray-100 hover:text-gray-900 transition duration-300  text-gray-100">Update</button>
                                </div> :
                                <h1 onClick={() => setIsEdit(true)} className='col-span-full cursor-pointer flex justify-end'> <span className='m-1 '><svg width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg></span> Edit</h1>}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Full Name</label>
                                <input onChange={editProfile} id="name" name='username' autoComplete="off" type="text" placeholder='User name' defaultValue={user?.username} disabled={!isEdit} className={`w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 ${errors.username ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
                                {errors.username && (<p className="pt-1 text-red-500 text-xs italic"> {errors.username}</p>)}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="mobile" className="text-sm">Mobile Number</label>
                                <input onChange={editProfile} id="mobile" name='mobile' autoComplete="off" type="text" placeholder='Mobile number' defaultValue={user?.mobile} disabled={!isEdit} className={`w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 ${errors.mobile ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
                                {errors.mobile && (<p className="text-red-500 pt-1 text-xs italic"> {errors.mobile}</p>)}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input onChange={editProfile} id="email" name='email' autoComplete="off" type="email" defaultValue={user?.email} disabled={!isEdit} placeholder="Email" className={`w-full rounded-md text-gray-900 focus:ring focus:ring-opacity-75 ${errors.email ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
                                {errors.username && (<p className="text-red-500 pt-1 text-xs italic"> {errors.email}</p>)}
                            </div>


                            <div className="col-span-full ">
                                <hr className='mt-5 opacity-30 ' />
                            </div>

                            <div className="col-span-full sm:col-span-2 text-gray-900">
                                <label htmlFor="password" className="text-sm">Change Your Password</label>
                                <input id="password" type="password" placeholder="New Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-2 text-gray-900">
                                <label htmlFor="confirmpassword" className="text-sm">Confirm Passowrd</label>
                                <input id="confirmpassword" type="password" placeholder="Confirm Passowrd" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full flex justify-end sm:col-span-2">
                                <button type="button" className="my-[25px] px-7 py-[9px] font-semibold text-sm border rounded border-gray-100 hover:bg-gray-100 hover:text-gray-900 transition duration-300  text-gray-100">Update Passowrd</button>
                            </div>


                        </div>
                        <div className="col-span-full flex justify-end pt-3">
                            <button onClick={logout} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                <span>Logout</span>
                            </button>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>)
};

export default UserProfile;


const ProfileDetails = () => {
    const [isEdit, setIsEdit] = useState(false)
    return (<>
        {isEdit ?
            <div onClick={update} className='col-span-full cursor-pointer flex justify-end'>
                <button type="button" className="font-semibold text-sm border rounded border-gray-100 px-2 py-[3] hover:bg-gray-100 hover:text-gray-900 transition duration-300  text-gray-100">Update</button>
            </div> :
            <h1 onClick={() => setIsEdit(true)} className='col-span-full cursor-pointer flex justify-end'> <span className='m-1 '><svg width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg></span> Edit</h1>}
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="name" className="text-sm">Full Name</label>
            <input onChange={editProfile} id="name" name='username' autoComplete="off" type="text" placeholder='User name' defaultValue={user?.username} disabled={!isEdit} className={`w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 ${errors.username ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
            {errors.username && (<p className="pt-1 text-red-500 text-xs italic"> {errors.username}</p>)}
        </div>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="mobile" className="text-sm">Mobile Number</label>
            <input onChange={editProfile} id="mobile" name='mobile' autoComplete="off" type="text" placeholder='Mobile number' defaultValue={user?.mobile} disabled={!isEdit} className={`w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 ${errors.mobile ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
            {errors.mobile && (<p className="text-red-500 pt-1 text-xs italic"> {errors.mobile}</p>)}
        </div>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">Email</label>
            <input onChange={editProfile} id="email" name='email' autoComplete="off" type="email" defaultValue={user?.email} disabled={!isEdit} placeholder="Email" className={`w-full rounded-md text-gray-900 focus:ring focus:ring-opacity-75 ${errors.email ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
            {errors.username && (<p className="text-red-500 pt-1 text-xs italic"> {errors.email}</p>)}
        </div></>)
}