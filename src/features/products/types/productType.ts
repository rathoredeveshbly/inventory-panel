export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  stock: number;
  description: string;
};

export type ProductResponse = {
  products: Product[];
};
