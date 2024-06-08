import { Card } from "@tremor/react";
import { AreaChartComponent as AreaChart } from "./AreaChart";
import { getIncomes } from "@/lib/action/getIncome";
import { currencyFormater } from "../dashboard/subscription/currencyFormater";
import { getUsers } from "@/lib/action";

export async function Analytics() {
  const { incomes } = await getIncomes();
  const getIncome = incomes.map((i) => {
    return i.incomes;
  });
  const totalIncome = getIncome.reduce((income, a) => income + a, 0);
  const { users } = await getUsers();
  const subscribers = users.filter((user) => user.subscription_id !== null);

  return (
    <Card className="grid gap-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Subscription Income
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Card className="max-w-xs" decoration="top" decorationColor="blue">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Total Income
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {currencyFormater(totalIncome)}
          </p>
        </Card>
        <Card className="max-w-xs" decoration="top" decorationColor="blue">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Subscibers
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {subscribers.length}
          </p>
        </Card>
      </div>
      <AreaChart incomes={incomes} />
    </Card>
  );
}
