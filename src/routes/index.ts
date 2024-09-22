import { Router } from "express";
import authenticationRoutes from "../Modules/Authentication/authentication.routes";
import productRoutes from "../Modules/Product/product.routes";
import bookingRoutes from "../Modules/Booking/booking.routes";

const routes = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authenticationRoutes,
  },
  {
    path: "/product",
    route: productRoutes,
  },
  {
    path: "/booking",
    route: bookingRoutes,
  },
];

moduleRoutes.forEach((item) => routes.use(item.path, item.route));

export default routes;
