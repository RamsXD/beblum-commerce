import { ProductType } from "../types/ProductType";
import Product from "./components/Product";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div className="max-w- mx-auto pt-8 px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 xl:gap-6">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <h1>beblum</h1>
    </div>
  );
}
