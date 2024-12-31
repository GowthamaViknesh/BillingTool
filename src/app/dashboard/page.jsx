"use client";

import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { FaCircleArrowRight } from "react-icons/fa6";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample chart data for Bar Chart (Sales)
const barData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [30, 45, 28, 50, 40, 60, 70, 65, 75, 90, 100, 85],
      backgroundColor: "#3E0E55",
      borderColor: "#3E0E55",
      borderWidth: 1,
      barThickness: 8,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20,
        color: "#444",
      },
      grid: {
        color: "#E0E0E0",
      },
    },
    x: {
      ticks: {
        color: "#444",
      },
      grid: {
        display: false,
      },
    },
  },
};

// Sample data for Doughnut Chart (Revenue)
const doughnutData = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      data: [300, 100, 450],
      backgroundColor: ["#EECA34", "#64BDC6", "#2B72FB"],
      hoverBackgroundColor: ["#EECA34", "#64BDC6", "#2B72FB"],
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

export default function DashboardContent() {
  const [totalSales, setTotalSales] = useState(0);
  const [totalSalesThisMonth, setTotalSalesThisMonth] = useState(0);

  const animateCount = (startValue, endValue, duration, setValue) => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(
        startValue + (endValue - startValue) * (progress / duration),
        endValue
      );
      setValue(Math.floor(value));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animateCount(0, 80, 5000, setTotalSales);
    animateCount(0, 20, 5000, setTotalSalesThisMonth);
  }, []);

  return (
    <div className="p-0 space-y-4 h-screen overflow-y-auto">
      {/* Row 1: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-md p-3 col-span-2 drop-shadow-md lg:ml-5 mt-2">
          <h2 className="text-lg font-bold text-purple-800 mb-4">
            SALES STATISTICS
          </h2>
          <div className="flex justify-end mb-2">
            <button className="px-2 py-1 text-sm font-semibold text-purple-900 bg-white border border-purple-900 rounded-sm mx-1">
              Monthly
            </button>
            <button className="px-3 py-1 text-sm font-semibold text-white bg-purple-900 border border-purple-900 mx-1">
              Weekly
            </button>
            <button className="px-4 py-1 text-sm font-semibold text-white bg-purple-900 border border-purple-900 mx-1">
              30 Day
            </button>
          </div>
          <div style={{ height: "200px" }}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white shadow-lg drop-shadow-md mt-2 rounded-md p-6">
          <h2 className="text-lg font-bold text-purple-800 mb-4">
            SALES DISTRIBUTION
          </h2>
          <div style={{ height: "200px" }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Row 2: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg drop-shadow-md rounded-md p-4 lg:ml-5">
          <h2 className="text-base font-semibold text-purple-900">
            Total Sales
          </h2>
          <p className="text-2xl font-bold">{totalSales}</p>
          <h2 className="text-base font-semibold mt-12 text-purple-900">
            Total Sales This Month
          </h2>
          <p className="text-2xl font-bold">{totalSalesThisMonth}</p>
        </div>
      </div>
    </div>
  );
}
