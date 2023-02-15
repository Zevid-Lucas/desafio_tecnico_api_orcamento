import { Request, Response } from "express";
import getUserAndProductsService from "../services/userAndProducts.service";

const getUserAndProducts = async (req: Request, res: Response) => {
  try {
    const { userId, productsIds } = req.params;
    const totalPrice = await getUserAndProductsService(userId, productsIds);
    res.status(200).json(totalPrice);
  } catch (error) {
    const { message } = error as Error;
    res.status(404).json({ message: message });
  }
};

export default getUserAndProducts;
