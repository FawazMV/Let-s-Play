import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const BarGraph = ({ data }) => (
    <ResponsiveContainer width="100%" isAnimationActive={false} height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 30, bottom: 5, }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip active={false} />
            <Legend />
            <Bar dataKey="totalPrice" barSize={65} isAnimationActive={false} fill="#829d" />
        </BarChart>
    </ResponsiveContainer>
);



export default BarGraph