import Bookings from '../../Pages/Turf_Management/Bookings/Bookings'
import Turf_Dashboard from '../../Pages/Turf_Management/Turf_Dashboard/Turf_Dashboard'
import TurfPorfile from '../../Pages/Turf_Management/Turf_Profile/TurfProfile'


const TurfRoutes = [

    { path: '', element: <Turf_Dashboard /> },
    { path: 'profile', element: <TurfPorfile /> },
    { path: 'bookings', element: <Bookings /> },
    
]
export default TurfRoutes