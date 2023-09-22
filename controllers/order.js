import Order from '../models/Order.js';

export const createOrder = async (req, res, next) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        next(err);
    }
};


export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.aggregate([
            {
              $lookup: {
                from: "inventories",
                localField: "item",
                foreignField: "sku",
                as: "invetory",
              },
            },
            {
              $project: {
                _id: 1,
                item: 1,
                price: 1,
                quantity: 1,
                "invetory.description":1,
              },
            },
          ])
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
};