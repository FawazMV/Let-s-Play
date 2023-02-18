import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Body from './Components/Home/LandinPage'
import Turf_Landing from "./Components/Turf_Management/Landin _Page/Turf_Landing";
import Turf from "./Components/Home/Turfs";
const Applayout = () => {
    return (
        <> 
            <Navbar />
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
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)