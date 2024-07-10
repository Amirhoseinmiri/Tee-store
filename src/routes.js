import { lazy } from "react";
import Home from "./pages/Home";
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));

export const appRoute = [
  {
    path: "/",
    component: Home,
    requireAuth: false,
  },
  {
    path: "/products/",
    component: Product,
    requireAuth: false,
  },
  {
    path: "/products/:category?",
    component: Product,
    requireAuth: false,
  },
  {
    path: "/cart",
    component: Cart,
    requireAuth: false,
  },
];
