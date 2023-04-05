import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const LineGraph = ({ data }) => (
    <ResponsiveContainer width="100%" isAnimationActive={false} height={400}>
        <LineChart margin={{ top: 5, right: 30, left: 30, bottom: 5, }} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip active={false} />
            {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
            <Legend />
            {/* <Line type="monotone" dataKey="name" stroke="#8884d8" /> */}
            <Line type="monotone" dataKey="totalPrice" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
)
export default LineGraph


