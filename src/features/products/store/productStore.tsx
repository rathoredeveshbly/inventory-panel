import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/productType";

type SortBy = "price" | "stock" | "";
type SortOrder = "asc" | "desc";

type ProductStore = {
  search: string;
  category: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
  page: number;

  // local persistence layer
  localProducts: Product[]; // new products created locally
  stockEdits: Record<number, number>; // productId -> stock

  // actions (filters)
  setSearch: (v: string) => void;
  setCategory: (v: string) => void;
  setSort: (by: SortBy) => void;
  setPage: (p: number) => void;

  // actions (data)
  addLocalProduct: (p: Product) => void;
  updateStock: (id: number, stock: number) => void;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      search: "",
      category: "all",
      sortBy: "",
      sortOrder: "asc",
      page: 1,

      localProducts: [],
      stockEdits: {},

      setSearch: (search) => set({ search, page: 1 }),
      setCategory: (category) => set({ category, page: 1 }),
      setSort: (sortBy) =>
        set((state) => ({
          sortBy,
          sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
        })),
      setPage: (page) => set({ page }),

      addLocalProduct: (p) =>
        set((s) => ({
          localProducts: [p, ...s.localProducts],
        })),

      updateStock: (id, stock) =>
        set((s) => ({
          stockEdits: { ...s.stockEdits, [id]: stock },
        })),
    }),
    {
      name: "inventory-products-v1", // localStorage key
      partialize: (s) => ({
        localProducts: s.localProducts,
        stockEdits: s.stockEdits,
        search: s.search,
        category: s.category,
        sortBy: s.sortBy,
        sortOrder: s.sortOrder,
      }),
    }
  )
);
