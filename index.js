import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import orderRoute from './routes/order.js'
import inventoryRoute from './routes/inventory.js'
import mongoose from 'mongoose';

import cookieParser from 'cookie-parser';
import { connect } from './db.js';

const app = express();
dotenv.config();

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});


//Middlewares
app.use(cookieParser());

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/orders', orderRoute)
app.use('/api/inventories', inventoryRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log('Connect to backend');
});
