import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Chart({ data }) {
    console.log(data)
    return (
        <ResponsiveContainer width="50%" height={400}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 30, bottom: 5, }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip active={false} />
                <Legend />
                {/* <Bar dataKey="name" barSize={50} isAnimationActive={false} fill="blue" /> */}
                <Bar dataKey="priceUsd"  barSize={65} isAnimationActive={false} fill="#829d" />
            </BarChart>
        </ResponsiveContainer>
    );
}
