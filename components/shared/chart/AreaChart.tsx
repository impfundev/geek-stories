"use client";

import { AreaChart } from "@tremor/react";

type DataChart = {
  incomes: {
    date: string;
    incomes: number;
  }[];
};

const dataFormatter = (number: number) =>
  `Rp.${Intl.NumberFormat("id-ID").format(number).toString()}`;

export function AreaChartComponent({ incomes }: DataChart) {
  return (
    <div className="w-full overflow-x-auto">
      <AreaChart
        className="w-full min-w-[28rem] h-80"
        data={incomes}
        index="date"
        categories={["incomes"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={100}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
