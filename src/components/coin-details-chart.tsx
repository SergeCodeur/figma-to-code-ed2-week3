import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

interface CoinChartProps {
  data: { month: string; price: number }[];
  priceChangePercentage: number;
}

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const CoinChart: React.FC<CoinChartProps> = ({
  data,
  priceChangePercentage,
}) => {
  const lineColor =
    priceChangePercentage >= 0
      ? "hsl(var(--tokena-green))"
      : "hsl(var(--tokena-red))";

  const xAxisTickColor = "hsl(var(--trick-chart-1)) !important";
  const yAxisTickColor = "hsl(var(--trick-chart-1)) !important";

  return (
    <div>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <CartesianGrid
            stroke="hsl(var(--tokena-light-gray))"
            vertical={true}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            tick={{ fill: xAxisTickColor }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <YAxis
            dataKey="price"
            domain={["auto", "auto"]}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            tick={{ fill: yAxisTickColor }}
          />
          <Line
            dataKey="price"
            type="linear"
            stroke={lineColor}
            strokeWidth={2}
            dot={{
              fill: lineColor,
            }}
            activeDot={{
              r: 3,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default CoinChart;
