import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface PopulationCount {
  year: number;
  value: number;
}

interface PopulationChartProps {
  populationCounts: PopulationCount[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({
  populationCounts,
}) => {
  const data = {
    labels: populationCounts.map((data) => data.year),
    datasets: [
      {
        label: "Population Over Time",
        data: populationCounts.map((data) => data.value),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important for responsiveness
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Population Growth",
      },
    },
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto" style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PopulationChart;
