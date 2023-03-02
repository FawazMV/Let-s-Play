import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Pages/USER/Layout/Navbar"
import Body from './Pages/USER/LandinPage'
import Turf_Landing from "./Pages/Turf_Management/Landin _Page/Turf_Landing";
import Turf from "./Pages/USER/Turfs";
// import Dashboard from "./Pages/Suepr_Admin/Dashboard";
// import Users from "./Pages/Suepr_Admin/Users";
// import Turf_Management from "./Pages/Suepr_Admin/Turf_Requests";
import AdminNavbar from "./Pages/Suepr_Admin/Layout/Navbar";
import Turfs_Accepted from "./Pages/Suepr_Admin/Tufs_Accepted";
import Turf_Dashboard from "./Pages/Turf_Management/Landin _Page/Turf_Dashboard";
import Turf_Login from "./Pages/Turf_Management/Landin _Page/Turf_Login";
import UserProfile from "./Pages/USER/UserProfile";
import { Provider, useSelector } from "react-redux";
import Store from "./utils/Redux/Store";
import UserLogin from "./Pages/USER/UserLogin";
import UserSignup from "./Pages/USER/UserSignup";
import MyComponent from "./Pages/USER/TurfDetails";
const Dashboard = lazy(() => import("./Pages/Suepr_Admin/Dashboard"))
const Users = lazy(() => import("./Pages/Suepr_Admin/Users"))
const Turf_Requests = lazy(() => import("./Pages/Suepr_Admin/Turf_Requests"))


const Applayout = () => {
    return (
        <>
            <Provider store={Store}>
                <Navbar />
                <Outlet />
            </Provider>
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



const Protected = ({ Component }) => {
    const authToken = useSelector((store) => store.auth.token);
    return authToken ? <Component /> : <Navigate to='/login' replace />;
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            { path: '/', element: <Body /> },
            { path: '/register-turf', element: <Turf_Landing /> },
            { path: '/turfs', element: <Turf /> }, 
            { path: '/turf-123', element: <MyComponent /> },
            { path: '/login', element: <UserLogin /> },
            { path: '/signup', element: <UserSignup /> },
            { path: '/profile', element: <Protected Component={UserProfile} /> },
            { path: '/turf-admin/login', element: <Turf_Login /> }
        ]
    },
    {
        path: '/admin',
        element: (<Suspense> <ApplayoutAdmin /> </Suspense>),
        children:
            [
                { path: '', element: <Dashboard /> },
                { path: 'users', element: <Users /> },
                { path: 'turf-requests', element: <Turf_Requests /> },
                { path: 'turfs', element: <Turfs_Accepted /> }
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
