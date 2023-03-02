import React, { useState } from 'react'
import { otpCall, otpVerification, registerUser } from '../../API/UserAuth';
import { useNavigate } from 'react-router-dom'
import SignupPage from './Layout/SignupPage';

const UserSignup = () => {
    const navigate = useNavigate()
    const [apiError, setApiError] = useState()
    const [otpPage, setOtpPage] = useState(false)
    const [otpErr, setOtpErr] = useState('')
    const [formData, setFormData] = useState({})

    const otpCallApi = (data) => {
        otpCall({ mobile: data.mobile, email: data.email }).then(() => {
            setOtpPage(true)
            setFormData(data)
        }).catch(err => setApiError(err))
    }
    const otpCheckApi = (mobile, otp ) => {
        otpVerification({ mobile, otp }).then(async () => {
            setOtpPage(false)
            await registerUser(formData).catch(err => console.log(err))
            navigate('/login')
        }).catch(err => setOtpErr(err))
    }


    return (<SignupPage otpSubmit={otpCheckApi} submit={otpCallApi}
        apiError={apiError} otpErr={otpErr} modal={setOtpPage} otpPage={otpPage} />)
}

export default UserSignup





