import { useState } from "react";
import { Axiosuser as axios } from "../../API/Axiosinstance";
import { OTP, Resend } from "../../API/UserAuth";

const OtpForm = ({ updateForm, formData }) => {
    const [otp, setOTP] = useState(["", "", "", ""]);
    const [err, setErr] = useState('')
    const [resend, setResend] = useState(true);

    const onDigitChange = (event, index) => {
        const updatedOTP = [...otp];
        updatedOTP[index] = event.target.value;
        setOTP(updatedOTP);

        if (event.target.value.length === 1 && index < 3) {
            document.getElementsByTagName("input")[index + 1].focus();
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const joinedOTP = otp.join("");
        formData.otp = joinedOTP
        OTP(formData).then(() => updateForm())
            .catch((err) => setErr(err))
        setOTP(['', '', '', ''])
    };
    return (
        <div className="bg-white mb-3 pb-5 px-11 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="flex justify-evenly">
                <h2 className="text-2xl font-[Poppins] font-bold pt-5 pb-3 sm:p-6 sm:pb-4">
                    Enter the OTP send to your number <br /><span className="text-blue-800 ml-[108px]">{formData.mobile} </span> </h2>
            </div>
            <form onSubmit={onFormSubmit} className="flex justify-evenly">
                {otp.map((digit, index) => (
                    <div key={index} className="mr-2 rounded-3xl">
                        <input
                            type="text"
                            value={digit}
                            onChange={(event) => onDigitChange(event, index)}
                            maxLength={1}
                            className="w-11 h-11 border border-gray-400 rounded text-center text-xl font-medium focus:outline-none"
                        />
                    </div>
                ))}
                <div>
                    <button type="submit" className="bg-indigo-500 text-white font-medium py-2 px-5 ml-5 rounded hover:bg-indigo-600">Submit</button>
                </div>

            </form>
            {resend ? <div className="text-blue-600 my-2 flex w-full justify-evenly" onClick={() => {
                Resend(formData.mobile).then(() => setResend(false))
                .catch((err) => console.log(err))
            }}> <p>Resend OTP</p></div> : ''}
            <div className="text-red-500 flex w-full justify-evenly"> <p>{err}</p></div>

        </div>
    )
}
export default OtpForm