import { orderDB } from "../models/orderModel.js";

export default class OrderService {
  static updateOrder = async (data) => {
    const order = await orderDB.create({
      firstname: data.firstname,
      lastname: data.lastname,
      country: data.country,
      email: data.email,
      whatsapp: data.whatsapp,
      orders: data.orders,
      time: new Date(),
    });
    return order;
  };
  static getOrders = async () => {
    const orders = await orderDB.find({});
    return orders;
  };
  static deleteOrder = async (id) => {
    await orderDB.findOneAndDelete({ _id: id });
  };
}
