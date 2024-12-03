import { Request, RequestHandler, Response } from "express";
import Product from "../models/Product";
import { ProductResponse } from "../interfaces/auth.interfaces";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProductsByTeam = async (req: Request, res: Response) => {
  try {
    const { team } = req.params;
    const products = await Product.find({ team });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const addProduct: RequestHandler<{}, ProductResponse> = async (
  req,
  res
) => {
  try {
    const { name, description, price, imageUrl, category, team, sizes  } = req.body;

    const product = new Product({
      name,
      description,
      price,
      imageUrl,
      category,
      team,
      sizes: sizes || undefined
    });

    await product.save();

    res.status(201).json({
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding product",
    });
  }
};
