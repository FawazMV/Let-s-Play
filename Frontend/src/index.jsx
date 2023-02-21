import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Body from './Components/Home/LandinPage'
import Turf_Landing from "./Components/Turf_Management/Landin _Page/Turf_Landing";
import Turf from "./Components/Home/Turfs";
import Dashboard from "./Components/Suepr_Admin/Dashboard";
import Users from "./Components/Suepr_Admin/Users";
import Turf_Management from "./Components/Suepr_Admin/Turf_Management";
import AdminNavbar from "./Components/Suepr_Admin/Layout/Navbar";
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
            }
        ]
    },
    {
        path: '/admin',
        element: <ApplayoutAdmin />,
        children: [
            {
                path: '/admin',
                element: <Dashboard />
            },
            {
                path: '/admin/users',
                element: <Users />
            },
            {
                path: '/admin/turfs',
                element: <Turf_Management />
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)