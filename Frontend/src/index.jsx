import React from "react";
import  ReactDOM  from "react-dom/client";
import Navbar from "./Components/Home/Navbar"
import Body from './Components/Home/Body'
const Applayout = ()=>{
    return(
        <>
        <Navbar/>
        <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>)