import { Request, Response } from "express";
import getUserAndProductsService from "../services/userAndProducts.service";

const getUserAndProducts = async (req: Request, res: Response) => {
  try {
    const { userId, productsIds } = req.params;
    const totalPrice = await getUserAndProductsService(userId, productsIds);
    res.status(200).json(totalPrice);
  } catch (error) {
    console.error(error);
  }
};

export default getUserAndProducts;
