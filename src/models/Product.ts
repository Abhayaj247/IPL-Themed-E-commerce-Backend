import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interfaces/IProduct";
import { IPL_TEAMS, PRODUCT_CATEGORIES } from "../config/constants";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [...PRODUCT_CATEGORIES],
      message: "{VALUE} is not a valid category",
    },
    team: {
      type: String,
      required: true,
      enum: [...IPL_TEAMS],
      message: "{VALUE} is not a valid IPL team",
    },
    sizes: {
      type: [String],
      required: false,
      default: undefined
    }
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
