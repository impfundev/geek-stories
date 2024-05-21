export function currencyFormater(value: number) {
  const currency = "Rp. " + new Intl.NumberFormat("id-ID").format(value);
  return currency;
}
