import express from 'express';
import { createOrder, getAllOrders } from '../controllers/order.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// GETALL
router.get('/', verifyToken, getAllOrders);
router.post('/', createOrder);

export default router;
