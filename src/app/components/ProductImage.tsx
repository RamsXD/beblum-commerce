"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "@/src/types/ProductType";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={product.thumbnail || "/fallback.png"}
      fill
      alt={product.title}
      className={`obeject-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.thumbnail}
      width={400}
      height={700}
      alt={product.title}
      className={`obeject-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  );
}
