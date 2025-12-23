import api from "../../../lib/axios";
import type { ProductFormValues } from "../schemas/productSchema";
import type { ProductResponse } from "../types/productType";

export const fetchProducts = async () => {
  const { data } = await api.get<ProductResponse>("/products?limit=300");
  return data.products;
};
export const addProduct = async (payload: ProductFormValues) => {
  const { data } = await api.post("/products/add", payload);
  return data; // returns created product object
};