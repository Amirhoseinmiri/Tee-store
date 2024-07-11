import { lazy } from "react";
import Home from "./pages/Home";
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));

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
  {
    path: "/checkout",
    component: Checkout,
    requireAuth: true,
  },
  {
    path: "/about",
    component: About,
    requireAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requireAuth: false,
  },
];
