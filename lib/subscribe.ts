import { subscribePlan } from "./action/subscribePlan";

type Subscribe = {
  paymentId: string | null;
  paymentStatus: string | null;
};

export async function useSubscribe({ paymentId, paymentStatus }: Subscribe) {
  if (paymentId && paymentStatus)
    await subscribePlan({
      paymentId,
      paymentStatus,
    });
}
