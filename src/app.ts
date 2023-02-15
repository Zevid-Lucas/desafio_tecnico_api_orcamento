import * as express from "express";
import * as routes from "./routers";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocs from "./swagger.json";

const app = express();

app.use("/users", routes.usersRoute);
app.use("/products", routes.productsRoute);
app.use("/usersAndProducts", routes.userAndProductsRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
