import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setToken } from "../../utils/Redux/AuthSlice.js";




export const TokenCheckUser = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    if (token && token != 'undefined') {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) dispatch(setToken(token))
    }

    const location = useLocation()
    const authToken = useSelector((store) => store.auth.token);

    if (location.pathname === '/signup' || location.pathname === '/login' && authToken) {
        return < Navigate to='/' replace />
    }

    if(location.pathname ==='/profile' && !authToken) {
        return < Navigate to='/login' replace />
    }
}

