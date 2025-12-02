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

  const altText = product.name || "Imagem do produto";

  const classNames = `object-cover ${
    loading ? "scale-110 blur-3xl grayscale" : "scale-100 blur-0 grayscale-0"
  }`;

  return fill ? (
    <Image
      src={product.image || "/fallback.png"}
      fill
      alt={altText}
      className={`obeject-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image || "/fallback.png"}
      width={400}
      height={700}
      alt={altText}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  );
}
