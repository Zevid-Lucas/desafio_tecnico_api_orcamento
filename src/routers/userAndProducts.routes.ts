import { Router } from "express";
import getUserAndProducts from "../controllers/userAndProducts.controller";

const userAndProductsRoutes = Router();

userAndProductsRoutes.get("/:userId/:productsIds", getUserAndProducts);

export default userAndProductsRoutes;
