import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, type ProductFormValues } from "../schemas/productSchema";
import { CATEGORY } from "../../../lib/utils";

export function ProductForm({ onSubmit }: { onSubmit: (v: ProductFormValues) => void }) {
  const categoriesWithoutAll = CATEGORY.slice(1);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      category: categoriesWithoutAll[0] ?? "",
      price: 0,
      stock: 0,
      description: "",
    },
  });

  const { formState: { errors } } = form;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm">Product Name</label>
        <input {...form.register("title")} className="border p-2 w-full rounded" />
        {errors.title && <p className="text-xs text-red-600 mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="text-sm">Category</label>
        <select {...form.register("category")} className="border p-2 w-full rounded">
          {categoriesWithoutAll.map((cat) => (
            <option key={cat} value={cat}>{cat.toUpperCase()}</option>
          ))}
        </select>
        {errors.category && <p className="text-xs text-red-600 mt-1">{errors.category.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Price</label>
          <input
            type="number"
            {...form.register("price", { valueAsNumber: true })}
            className="border p-2 w-full rounded"
          />
          {errors.price && <p className="text-xs text-red-600 mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label className="text-sm">Stock</label>
          <input
            type="number"
            {...form.register("stock", { valueAsNumber: true })}
            className="border p-2 w-full rounded"
          />
          {errors.stock && <p className="text-xs text-red-600 mt-1">{errors.stock.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm">Description</label>
        <textarea {...form.register("description")} className="border p-2 w-full rounded" />
        {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>}
      </div>

      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Save Product
      </button>
    </form>
  );
}