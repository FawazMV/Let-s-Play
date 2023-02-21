import Form from "./Components/Form";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import { useRef } from "react";


const Turf_Landing = () => {
    const myDivRef = useRef(null);
    return (
        <div className='pt-[72px]'>
            <Banner div={myDivRef} />
            <Content />
            <Form div={myDivRef} />
        </div >

    )
}

export default Turf_Landing;