import { useEffect, useState } from "react";
import { dashboardProfitReport } from "../../../API/ServerRequests/Admin/AdminApi.js";
import BarGraph from "./Components/BarGraph";
import LineGraph from "./Components/LineGraph.jsx";

export default function App() {
    const [data, setdata] = useState();

    useEffect(() => {

        fetchDatas();
    }, []);

    const fetchDatas = async () => {
        const data = await dashboardProfitReport('token');
        console.log(data);
        setdata(data?.data);
    };
    return (
        <div className="pt-20">
            How to use Recharts with React
            <div className="flex justify-between">
                <BarGraph data={data} />
                <LineGraph data={data} />
            </div>

        </div>
    );
}
