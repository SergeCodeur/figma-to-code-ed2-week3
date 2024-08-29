import { Line, LineChart, YAxis } from "recharts";

interface SparklineProps {
  data: number[];
  isPositiveChange: boolean;
}

const Sparkline: React.FC<SparklineProps> = ({ data, isPositiveChange }) => {
  const chartData = data.map((price, index) => ({ index, price }));

  return (
    <LineChart
      width={100}
      height={30}
      data={chartData}
      margin={{
        left: 12,
        right: 12,
      }}
      className={isPositiveChange ? "text-tokena-green" : "text-tokena-red"}
    >
      <YAxis
        domain={["dataMin", "dataMax"]}
        hide={true}
        tickLine={false}
        axisLine={false}
        tickMargin={10}
      />
      <Line
        type="monotone"
        dataKey="price"
        stroke="currentColor"
        strokeWidth={1}
        dot={false}
      />
    </LineChart>
  );
};

export default Sparkline;
