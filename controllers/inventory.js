import Inventory from '../models/Inventory.js';

const LIMIT_QUANTITY = 100;

export const createInventory = async (req, res, next) => {
  const newInventory = new Inventory(req.body);

  try {
    const savedInventory = await newInventory.save();
    res.status(200).json(savedInventory);
  } catch (err) {
    next(err);
  }
};

export const getAllInventory = async (req, res, next) => {
  try {
    const lowQuantity = await req.query?.lowQuantity;
    let query = {};
    if (lowQuantity === 'true') {
      query = { instock: { $lte: LIMIT_QUANTITY } };
    }

    const inventories = await Inventory.find(query);
    res.status(200).json(inventories);
  } catch (err) {
    next(err);
  }
};
