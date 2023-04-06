import { useEffect, useState } from "react";
import { dashboardGraphDetails, turfsCount, usersCount } from "../../../API/ServerRequests/Admin/AdminApi.js";
import BarGraph from "./Components/BarGraph";
import LineGraph from "../../Components/LineGraph.jsx";
import { Link } from 'react-router-dom'
import CountView from "./Components/CountView.jsx";

export default function App() {

    return (
        <div className="pt-20 bg-slate-800 min-h-screen">
            <CountView />
            <Graphs />
        </div>
    );
}









