import { Snap } from "midtrans-client/lib/snap";

export const snap = new Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
  clientKey: process.env.CLIENT_KEY,
});
