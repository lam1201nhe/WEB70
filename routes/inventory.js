import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import { createInventory, getAllInventory } from '../controllers/inventory.js';

const router = express.Router();

// GETALL
router.get('/', verifyToken, getAllInventory);

//Create
router.post('/create', createInventory);

export default router;
