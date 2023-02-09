import React, { useState } from "react";

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
};

const Form = () => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validate = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";

        if (!formData.name) {
            nameError = "Name is required";
        }

        if (!formData.email.includes("@")) {
            emailError = "Invalid email";
        }

        if (!formData.message) {
            messageError = "Message is required";
        }

        if (nameError || emailError || messageError) {
            setFormData({ ...formData, nameError, emailError, messageError });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            console.log(formData);
            setFormData(initialState);
        }
    };

    return (
        <div className="flex">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formData.nameError ? "border-red-500" : ""
                                }`}
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <p className="text-red-500 text-xs italic">{formData.nameError}</p>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formData.emailError ? "border-red-500" : ""
                                }`}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <p className="text-red-500 text-xs italic">{formData.emailError}</p>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formData.messageError ? "border-red-500" : ""
                                }`}
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <p className="text-red-500 text-xs italic">{formData.messageError}</p>
                    </div>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div>
                <p>dsafjksdfj;lasjf;lkj</p>
            </div>

        </div>
    );
};

export default Form;

