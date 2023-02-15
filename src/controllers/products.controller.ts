import { Request, Response } from "express";
import getProductsService from "../services/products.service";

const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await getProductsService();
    res.status(200).json(products);
  } catch (error) {
    const { message } = error as Error;
    res.status(404).json({ message: message });
  }
};

export default getProducts;
