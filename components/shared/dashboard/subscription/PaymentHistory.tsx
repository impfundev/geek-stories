import { getPaymentHistory } from "@/lib/action/getPaymentHistory";
import { TablePaymentHistory } from "../table/payment";

export async function PaymentHistory() {
  const { paymentHistory } = await getPaymentHistory();

  return <TablePaymentHistory data={paymentHistory} />;
}
