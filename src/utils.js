import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";
export const ALLOWED_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};
export const fetchProducts = async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};
export const fetchCategory = async (_category) => {
  const response = await axios.get(
    `${BASE_URL}/products/category/${_category}`
  );

  return response.data;
};
