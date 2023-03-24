import { AxiosReview as axios } from "../../Axiosinstance";

export const getTurfView = async (id) => {
    try {
        const response = await axios.get('/get-review', { params: { id } })
        return response
    } catch (error) {
        return error?.response
    }
}