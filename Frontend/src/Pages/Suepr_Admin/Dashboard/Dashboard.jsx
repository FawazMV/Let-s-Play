import { useEffect, useState } from "react";
import Chart from "./Components/Chart";

export default function App() {
    const [data, setdata] = useState();

    useEffect(() => {
        const fetchDatas = async () => {
            const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
            const data = await res.json();
            console.log(data);
            setdata(data?.data);
        };
        fetchDatas();
    }, []);

    return (
        <div className="pt-20">
            How to use Recharts with React
            <Chart data={data} />
        </div>
    );
}
