import mongoose from 'mongoose';
const { Schema } = mongoose;

const inventorySchema = new Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    instock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Inventory', inventorySchema);
