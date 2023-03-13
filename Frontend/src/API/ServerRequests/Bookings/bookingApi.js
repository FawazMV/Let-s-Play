import { AxiosBookings as axios } from "../../Axiosinstance";

export const getBookedSlots = async (date, id) => {
    try {
        const response = await axios.get('/booked-slots', { params: { date, id } })
        return response
    } catch (error) {
        return error?.response
    }
}


export const payementAction = async () => {
    try {
        const response = await axios.get('/payment');
        return response;
    } catch (error) { }
};