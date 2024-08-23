import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export const PieChartCard = ({ title, key }) => {
  return (
    <>
      {title}
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: `${title}` },
              { id: 1, value: 15, label: `${title}` },
              { id: 2, value: 20, label: `${title}` },
            ],
          },
        ]}
        width={400}
        height={200}
        key={key}
        title={title}
      />
    </>
  );
};
