import React, { useState } from 'react'
import LoginPage from '../Layouts/LoginPage';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from "../../utils/Redux/AuthSlice.js";
import { userLogin } from '../../API/UserAuth';

const UserLogin = () => {
    const title = 'full features'
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [apiError, setApiError] = useState()
    const userLoginapicall = async (formData) => {
        const data = await userLogin(formData).catch(error => setApiError(error));
        dispatch(setToken(data))
        localStorage.setItem('token', data);
        navigate(-1)
    }
    return <LoginPage title={title} signup='/signup' submit={userLoginapicall} apiError={apiError} />
}

export default UserLogin


