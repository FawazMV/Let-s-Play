import { AxiosBookings as axios } from "../../Axiosinstance";

export const getBookedSlots = async (date, id) => {
    try {
        const response = await axios.get('/booked-slots', { params: { date, id } })
        return response
    } catch (error) {
        return error?.response
    }
}


export const payementAction = async (book_id) => {
    try {
        const response = await axios.get('/payment', { params: { book_id } });
        return response;
    } catch (error) { return error?.response }
};

export const bookingSuccess = async (id) => {
    try {
        const response = await axios.patch('/booking-success', { id })
        return response
    } catch (error) { return error?.response }
}

export const bookingFailed = async (id) => {
    try {
        const response = await axios.patch('/booking-failed', { id })
        return response
    } catch (error) { return error?.response }
}