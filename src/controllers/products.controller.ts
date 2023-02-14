import { Request, Response } from "express";
import getProductsService from "../services/products.service";

const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await getProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
};

export default getProducts;
