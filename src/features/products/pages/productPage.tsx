import { Link } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProducts";
import { ProductTable } from "../components/productTable";
import { useProductStore } from "../store/productStore";
import type { Product } from "../types/productType";

export function ProductsPage() {
  const { data, isLoading } = useProducts();

  const localProducts = useProductStore((s) => s.localProducts);
  const stockEdits = useProductStore((s) => s.stockEdits);

  if (isLoading) return <p className="p-6">Loading...</p>;

  const apiProducts: Product[] = data ?? [];

  // apply stock edits to api products
  const apiWithEdits = apiProducts.map((p) =>
    stockEdits[p.id] !== undefined ? { ...p, stock: stockEdits[p.id] } : p
  );

  // merge: local products on top + api products (edited)
  const merged = [...localProducts, ...apiWithEdits];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>

        <Link
          to="/products/new"
          className="flex bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-sm items-center gap-2 px-4 py-2"
        >
          <span>Add Product</span>
        </Link>
      </div>

      <ProductTable products={merged} />
    </div>
  );
}
