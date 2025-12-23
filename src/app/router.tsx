import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { ProductsPage } from "../features/products/pages/productPage";
import { AddProductPage } from "../features/products/pages/addProductPage";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const addProductRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/new",
  component: AddProductPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <ProductsPage />,
});

const routeTree = rootRoute.addChildren([indexRoute, productsRoute, addProductRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
