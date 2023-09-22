import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        item: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Order', orderSchema);