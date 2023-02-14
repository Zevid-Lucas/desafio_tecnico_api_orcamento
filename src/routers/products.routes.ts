import { Router } from "express";
import getProducts from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.get("/", getProducts);

export default productsRoutes;
