import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import styles from "./layout.module.css";

Chart.register(CategoryScale);

const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "mai", "jun"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 13, 15, 2, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
    },
  ],
};

export default function Graficos(props) {
  return (
    <div>
      <h2>Água exemplo</h2>
      <Bar
        data={data}
        width={300}
        height={150}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
