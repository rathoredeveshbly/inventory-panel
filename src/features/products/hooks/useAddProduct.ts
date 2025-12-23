import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ProductFormValues } from "../schemas/productSchema";
import { addProduct } from "../api/productsApi";

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: ProductFormValues) => addProduct(values),
    onSuccess: () => {
      // refresh products list
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
