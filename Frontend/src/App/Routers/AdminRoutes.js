import Dashboard from "../../Pages/Suepr_Admin/Dashboard/Dashboard"
import Users from "../../Pages/Suepr_Admin/Users/Users"
import Turf_Requests from "../../Pages/Suepr_Admin/Turf_Requests/Turf_Requests"
import Turfs_Accepted from "../../Pages/Suepr_Admin/Turfs_Accepted/Turfs_Accepted"

const AdminRoutes = [

    { path: '', element: <Dashboard /> },
    { path: 'users', element: <Users /> },
    { path: 'turf-requests', element: <Turf_Requests /> },
    { path: 'turfs', element: <Turfs_Accepted /> }
]

export default AdminRoutes