export const TurfRegistrationDiv = [
    {
        label: 'Court Name',
        id: 'courtName',
        placeholder: 'Enter Court Name',
    },
    {
        label: 'Email',
        id: 'email',
        placeholder: 'Enter your email',
    },
    {
        label: 'Mobiel Number',
        id: 'mobile',
        placeholder: 'Enter your mobile number',
    },
    {
        label: 'Password',
        id: 'password',
        placeholder: 'Enter your password',
    },
    {
        label: 'Sports Event',
        id: 'event',
        placeholder: 'Select Sports Type',
    },
    {
        label: 'Loction Details',
        id: 'loction_Details',
        placeholder: 'Enter your loction_Details',
    },
]

export const initialState = {
    courtName: "Campnou", email: "mvfawazmfz@gmail.com", mobile: "9072879663", password: '1234', location: "", distric: "", state: '', event: 'Football',
    loction_Details: "Near calicut university", images: []
};
export const errorState = {
    courtNameError: "", emailError: "", mobileError: "", passwordError: "",
    locationError: '', eventError: '', loction_DetailsError: "", imagesError: ""
}

export const mapboxToken = "pk.eyJ1IjoiZmF3YXptdiIsImEiOiJjbGU3bjRicGYwNzJpM3ZuYmQ4Njd1MzdqIn0.T0K_SA2RGYeL9XzOdBXLYg"