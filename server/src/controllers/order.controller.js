import OrderService from "../services/orderService.js";

export const updateOrder = async (req, res) => {
  const order = await OrderService.updateOrder(req.body);
  console.log(order);
  res.status(200).send({ message: "OK", data: order });
};

export const deleteOrder = async (req, res) => {
  console.log(req.body);
  const data = await OrderService.deleteOrder(req.body.id);
  console.log(data);
  res.status(200).send({ message: "OK", data: data });
};

export const getOrders = async (req, res) => {
  const orders = await OrderService.getOrders();
  res.status(200).send(orders);
};
