import { useNavigate } from "@tanstack/react-router";
import { ProductForm } from "../components/productForm";
import { useProductStore } from "../store/productStore";
import type { ProductFormValues } from "../schemas/productSchema";
import type { Product } from "../types/productType";

export function AddProductPage() {
  const navigate = useNavigate();
  const addLocalProduct = useProductStore((s) => s.addLocalProduct);

  const handleSubmit = (v: ProductFormValues) => {
    const newProduct: Product = {
      id: Date.now(),
      title: v.title,
      category: v.category,
      price: v.price,
      stock: v.stock,
      description: v.description ?? "",
    };

    addLocalProduct(newProduct);
    navigate({ to: "/products" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
