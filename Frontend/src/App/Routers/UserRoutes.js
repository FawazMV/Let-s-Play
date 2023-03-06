import Turfs from "../../Pages/USER/All_Turfs/Turfs"
import LandingPage from "../../Pages/USER/LandingPage/LandingPage"
import TurfDetails from '../../Pages/USER/Turf_Details/TurfDetails'
import Turf_Registration from '../../Pages/Turf_Management/Turf_Registration/Turf_Registration'
import UserLogin from '../../Pages/USER/User_Login/UserLogin'
import UserSignup from "../../Pages/USER/User_Signup/UserSignup"
import UserProfile from '../../Pages/USER/User_Profile/UserProfile'
import Turf_Login from '../../Pages/Turf_Management/Turf_Login/Turf_Login'
import { ProtectTurfLogin } from "../RoutesProtect/TurfProtect.js"

const UserRoutes = [
    { path: '/', element: <LandingPage /> },
    { path: '/register-turf', element: <Turf_Registration /> },
    { path: '/turfs', element: <Turfs /> },
    { path: '/turf/:id', element: <TurfDetails /> },
    { path: '/login', element: <UserLogin /> },
    { path: '/signup', element: <UserSignup /> },
    { path: '/profile', element: <UserProfile /> },
    { path: '/turf-admin/login', element: <ProtectTurfLogin Component={Turf_Login} /> }
]

export default UserRoutes
