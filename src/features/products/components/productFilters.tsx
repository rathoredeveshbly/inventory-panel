import { useEffect, useMemo } from "react";
import { useProductStore } from "../store/productStore";
import { debounce } from "../../../lib/utils";

const categories = [
  "all",
  "smartphones",
  "laptops",
  "fragrances",
  "groceries",
];

export function ProductFilters() {
  const {
    setSearch,
    category,
    setCategory,
    setSort,
  } = useProductStore();

  const debouncedSearch = useMemo(
    () => debounce(setSearch, 400),
    [setSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);


  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        placeholder="Search by product name..."
        onChange={(e) => {debouncedSearch(e.target.value)}}
        className="border px-3 py-2 w-64"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-3 py-2"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c.toUpperCase()}
          </option>
        ))}
      </select>

      <button onClick={() => setSort("price")} className="border px-3 py-2">
        Sort by Price
      </button>

      <button onClick={() => setSort("stock")} className="border px-3 py-2">
        Sort by Stock
      </button>
    </div>
  );
}