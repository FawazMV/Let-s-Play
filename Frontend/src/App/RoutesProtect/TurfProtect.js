import jwtDecode from "jwt-decode"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { setTurfAuth } from "../../utils/Redux/TurfAuthSlice.js"

export const TurfProtection = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('turftoken');
    if (token && token != 'undefined') {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) dispatch(setTurfAuth(token));
    }
    const authToken = useSelector((store) => store.turfAuth.token)
    return authToken ? <></> : <Navigate to='/turf-admin/login' />;
}

export const ProtectTurfLogin = ({ Component }) => {
    const authToken = useSelector((store) => store.turfAuth.token)
    return !authToken ? <Component /> : <Navigate to='/turf-admin' />;
}