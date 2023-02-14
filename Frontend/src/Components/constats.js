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
            label: 'Location',
            id: 'location',
            placeholder: 'Enter Court location',
        },
        {
            label: 'District',
            id: 'distric',
            placeholder: 'Select district',
        },
        {
            label: 'State',
            id: 'state',
            placeholder: 'Select State',
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
    courtName: "", email: "", mobile: "", password: '', location: "", distric: "", state: '', event: '',
    loction_Details: "",
};
export const errorState = {
    courtNameError: "", emailError: "", mobileError: "", passwordError: "",
    locationError: '', districError: '', stateError: '', eventError: '', loction_DetailsError: "",
}