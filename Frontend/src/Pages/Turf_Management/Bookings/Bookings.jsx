import { useEffect } from "react"
import { useSelector } from "react-redux"

const Bookings = () => {

    const token = useSelector(store => store.turfAuth.token)
    useEffect(() => {
        token && getBookedTurfs()
    }, [token])

    const getBookedTurfs = () => {
        
    }

    return (
        <div className="pt-20">Bookings</div>
    )
}

export default Bookings

