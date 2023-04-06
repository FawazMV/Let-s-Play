import { useEffect, useState } from "react";
import { dashboardGraphDetails } from "../../../API/ServerRequests/Admin/AdminApi.js";
import BarGraph from "./Components/BarGraph";
import LineGraph from "./Components/LineGraph.jsx";
import { Link } from 'react-router-dom'

export default function App() {
    const [turfGraphData, setTurfGraphData] = useState([]);
    const [monthlyGraphData, setMonthlyGraphData] = useState([]);
    useEffect(() => {
        fetchDatas();
    }, []);
    const balance = 100
    const profit = 200

    const fetchDatas = async () => {
        const response = await dashboardGraphDetails('token');
        console.log(response);
        setTurfGraphData(response?.data?.turfWiseReport);
        setMonthlyGraphData(response?.data?.monthlyReport)
    };
    return (
        <div className="pt-20 bg-slate-800 min-h-screen">
            <div className="md:flex justify-evenly p-5">
                <div className=" flex flex-col bg-gray-900 p-2 rounded-xl">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4 rounded-lg bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                                <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center align-middle">
                            <p className="text-[33px] font-semibold leading-none"> {balance + profit}</p>
                            <p className="capitalize text-sm">Active Users</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                        <Link to='/admin/users' className='p-2 bg-cyan-200 font-semibold text-sm tracking-wider uppercase  hover:opacity-80 transition rounded-2xl text-center' ><button>All Users</button></Link>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-900 p-2 md:my-0 my-5 rounded-xl">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex items-center justify-center px-4 rounded-lg bg-violet-400 text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                                <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                                <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center align-middle">
                            <p className="text-[33px] font-semibold leading-none"> {balance + profit}</p>
                            <p className="capitalize text-sm">Play Grounds</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                        <Link to='/admin/turfs' className='p-2 bg-cyan-200 font-semibold text-sm tracking-wider uppercase  hover:opacity-80 transition rounded-2xl text-center' ><button>All Turfs</button></Link>
                    </div>
                </div>

                <div className=" flex flex-col bg-gray-900 p-2 rounded-xl">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                                <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center align-middle">
                            <p className="text-[33px] font-semibold leading-none">₹ {balance + profit}</p>
                            <p className="capitalize text-sm">Profit Earned</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                        <Link to='/admin/all-reports' className='p-2 bg-cyan-200 font-semibold text-sm tracking-wider uppercase  hover:opacity-80 transition rounded-2xl text-center' ><button>Reports</button></Link>
                    </div>
                </div>
            </div>
            <div className="md:px-16 xl:px-20 lg:flex justify-between">
                <BarGraph data={turfGraphData} />
                <LineGraph data={monthlyGraphData} />
            </div>

        </div>
    );
}
