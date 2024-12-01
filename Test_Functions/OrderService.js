const getSum = (items) => {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
};
export const calculateOrderTotal = (items, discountCode) => {
  const discountRate = discountCode === "SUMMER10" ? 0.1 : 0;
  const subTotal = getSum(items);
  const discountAmount = subTotal * discountRate;
  const amountToPay = subTotal - discountAmount;

  return amountToPay;
};
