import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function SimpleCharts() {
  const seriesData = [4, 3.5, 9, 7, 7.6, 3, 8, 10, 8.5, 7, 6.7, 6.9];

  return (
    <>
      <div className="bg-white rounded-lg ml-9">
        <div className="flex justify-between w-[800px]">
          <h1 className="flex items-center  m-2">OverView</h1>
          <select name="" id="" className="mx-5">
            <option value="">quantity</option>
            <option value="">quantity</option>
          </select>
        </div>

        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: [
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
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: seriesData,
            },
          ]}
          width={800}
          height={300}
        />
      </div>
    </>
  );
}
