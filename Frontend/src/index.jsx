import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Body from './Components/Home/LandinPage'
import Turf_Landing from "./Components/Turf_Management/Landin _Page/Turf_Landing";
import Turf from "./Components/Home/Turfs";
// import Dashboard from "./Components/Suepr_Admin/Dashboard";
// import Users from "./Components/Suepr_Admin/Users";
// import Turf_Management from "./Components/Suepr_Admin/Turf_Requests";
import AdminNavbar from "./Components/Suepr_Admin/Layout/Navbar";
import Turfs_Accepted from "./Components/Suepr_Admin/Tufs_Accepted";
import Turf_Dashboard from "./Components/Turf_Management/Landin _Page/Turf_Dashboard";
import Turf_Login from "./Components/Turf_Management/Landin _Page/Turf_Login";
import UserProfile from "./Components/Home/UserProfile";

const Dashboard = lazy(() => import("./Components/Suepr_Admin/Dashboard"))
const Users = lazy(() => import("./Components/Suepr_Admin/Users"))
const Turf_Requests = lazy(() => import("./Components/Suepr_Admin/Turf_Requests"))




const Applayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
const ApplayoutAdmin = () => {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}
const ApplayoutTurfAdmin = () => {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/register-turf',
                element: <Turf_Landing />
            },
            {
                path: '/turfs',
                element: <Turf />
            },
            {
                path: '/profile',
                element: <UserProfile />
            },
            {
                path: '/turf-admin/login',
                element: (
                    <Suspense >
                        <Turf_Login />
                    </Suspense>
                )
            }
        ]
    },
    {
        path: '/admin',
        element: <ApplayoutAdmin />,
        children: [
            {
                path: '/admin',
                element: (
                    <Suspense >
                        <Dashboard />
                    </Suspense>
                )
            },
            {
                path: '/admin/users',
                element: (
                    <Suspense >
                        <Users />
                    </Suspense>
                )
            },
            {
                path: '/admin/turf-requests',
                element: (
                    <Suspense >
                        <Turf_Requests />
                    </Suspense>
                )
            },
            {
                path: '/admin/turfs',
                element: (
                    <Suspense >
                        <Turfs_Accepted />
                    </Suspense>
                )
            }
        ]
    },
    {
        path: '/turf-admin',
        element: <ApplayoutTurfAdmin />,
        children: [
            {
                path: '/turf-admin',
                element: (
                    <Suspense >
                        <Turf_Dashboard />
                    </Suspense>
                )
            },
            {
                path: '/turf-admin/turf-requests',
                element: (
                    <Suspense >
                        <Turf_Requests />
                    </Suspense>
                )
            },
            {
                path: '/turf-admin/turfs',
                element: (
                    <Suspense >
                        <Turfs_Accepted />
                    </Suspense>
                )
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
