"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Analytics() {
  const ref = useRef();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
      },
    },
  };

  const data = {
    labels: month,
    datasets: [
      {
        label: "Users",
        data: [1000, 3400, 5200, 7200, 8500, 9800, 12000],
        backgroundColor: "#3730a3",
        borderColor: "#3730a3",
        hoverOffset: 4,
        tension: 0.4,
      },
      {
        label: "New Users",
        data: [1120, 2131, 1244, 3221, 4241, 3123, 5120],
        backgroundColor: "#38bdf8",
        borderColor: "#38bdf8",
        hoverOffset: 4,
        tension: 0.4,
      },
    ],
  };

  return (
    <Card className="w-full flex flex-col gap-4 drop-shadow-lg mb-6">
      <CardHeader className="text-2xl font-bold">Analytics</CardHeader>
      <CardContent>
        <Line ref={ref} data={data} options={options} />
      </CardContent>
    </Card>
  );
}
