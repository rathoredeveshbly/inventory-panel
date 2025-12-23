import type { Product } from "../types/productType";
import { useProductStore } from "../store/productStore";
import { ProductStatusBadge } from "./productStatusBadge";
import { Pagination } from "./pagination";
import { CATEGORY } from "../../../lib/utils";
import { StockEditableCell } from "./stockEditableCell";



const PAGE_SIZE = 10;

export function ProductTable({ products }: { products: Product[] }) {
  const {
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSort,
    sortOrder,
    page,
    setPage,
  } = useProductStore();


  let data = [...products];

  if (search) {
    data = data.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category !== "all") {
    data = data.filter((p) => p.category === category);
  }

  if (sortBy) {
    data.sort((a, b) =>
      sortOrder === "asc"
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy]
    );
  }

  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const paginated = data.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="overflow-x-auto bg-gray-400 rounded-lg shadow">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-4 py-3 text-left">
              <div className="flex items-center gap-1">
                Name
              </div>
              <input
                placeholder="Search product..."
                className="mt-2 border px-1 py-1 w-full rounded"
                onChange={(e) => setSearch(e.target.value)}
              />
            </th>

            <th className="px-4 py-3 text-left">
              <div className="flex items-center gap-1">
                Category
              </div>
              <select
                className="mt-2 border px-2 py-1 w-full rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORY.map((c) => (
                  <option key={c} value={c}>
                    {c.toUpperCase()}
                  </option>
                ))}
              </select>
            </th>

            <th className="px-4 py-3">
              <button
                className="flex items-center gap-1"
                onClick={() => setSort("price")}
              >
                Price
              </button>
            </th>

            <th className="px-4 py-3">
              <button
                className="flex items-center gap-1"
                onClick={() => setSort("stock")}
              >
                Stock
              </button>
            </th>

            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-300">
              <td className="px-4 py-3">{p.title}</td>
              <td className="px-4 py-3 capitalize">{p.category}</td>
              <td className="px-4 py-3">${p.price}</td>
              <td className="px-4 py-3">
                <StockEditableCell id={p.id} stock={p.stock} />
              </td>
              <td className="px-4 py-3">
                <ProductStatusBadge stock={p.stock} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4">
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
