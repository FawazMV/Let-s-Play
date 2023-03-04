import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Pages/USER/Layout/Navbar"
import Body from './Pages/USER/LandinPage'
import Turf_Registration from "./Pages/Turf_Management/Turf_Registration";
import Turf from "./Pages/USER/Turfs";
import AdminNavbar from "./Pages/Suepr_Admin/Layout/Navbar";
import Turfs_Accepted from "./Pages/Suepr_Admin/Tufs_Accepted";
import Turf_Dashboard from "./Pages/Turf_Management/Turf_Dashboard";
import Turf_Login from "./Pages/Turf_Management/Turf_Login";
import UserProfile from "./Pages/USER/UserProfile";
import { Provider, useDispatch, useSelector } from "react-redux";
import Store from "./utils/Redux/Store";
import UserLogin from "./Pages/USER/UserLogin";
import UserSignup from "./Pages/USER/UserSignup";
import TurfDetails from "./Pages/USER/TurfDetails";
import TurfPorfile from "./Pages/Turf_Management/TurfProfile";
import { setTurfAuth } from "./utils/Redux/TurfAuthSlice";
const Dashboard = lazy(() => import("./Pages/Suepr_Admin/Dashboard"))
const Users = lazy(() => import("./Pages/Suepr_Admin/Users"))
const Turf_Requests = lazy(() => import("./Pages/Suepr_Admin/Turf_Requests"))
import jwtDecode from "jwt-decode"
import TurfNavbar from "./Pages/Turf_Management/Components/TurfNavbar";


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
const AuthTurf = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        retriveToken()
    }, [])
    const retriveToken = () => {
        const token = localStorage.getItem('turftoken');
        if (token && token != 'undefined') {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp > currentTime) dispatch(setTurfAuth(token));
        }
    }
}

const TurfProtect = ({ Component }) => {
    const authToken = useSelector((store) => store.turfAuth.token) || localStorage.getItem('turftoken');
    return authToken ? <Component /> : <Navigate to='/turf-admin/login' />;
}
const ApplayoutTurfAdmin = () => {

    return (
        <>
            <Provider store={Store}>
                <AuthTurf />
                <TurfNavbar />
                <TurfProtect Component={Outlet} />
            </Provider>
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
            { path: '/register-turf', element: <Turf_Registration /> },
            { path: '/turfs', element: <Turf /> },
            { path: '/turf/:id', element: <TurfDetails /> },
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
        element: (<Suspense><ApplayoutTurfAdmin /> </Suspense>),
        children:
            [
                { path: '', element: <Turf_Dashboard /> },
                { path: 'profile', element: <TurfPorfile /> },
                { path: 'turf-requests', element: <Turf_Requests /> },
                { path: 'turfs', element: <Turfs_Accepted /> }
            ]

    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
