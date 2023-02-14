import * as express from "express";
import * as routes from "./routers";
const app = express();

app.use("/users", routes.usersRoute);
app.use("/products", routes.productsRoute);
app.use("/usersAndProducts", routes.userAndProductsRoutes);

export default app;
