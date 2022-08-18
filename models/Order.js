const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    userId: { type: String },
    products: [
      {
        productId: { type: String, default: 1 },
        quantity: { type: Number, required: true },
      },
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timeStamps: true }
);

export default mongoose.model("Order", OrderSchema);
