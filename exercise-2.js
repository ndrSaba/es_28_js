const order = {};

const customerCity = order?.customer?.city ?? "City is required";
console.log(customerCity);

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }