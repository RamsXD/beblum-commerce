"use client";

import { useCartStore } from "@/src/store";
import Image from "next/image";
import CartDrawer from "./CartDrawer";

export default function Cart() {
  const useStore = useCartStore();
  return (
    <>
      <div
        onClick={() => useStore.toggleCart()}
        className="flex items-center cursor-pointer"
      >
        <Image src="/cesta.png" alt="carrinho" width={30} height={30}></Image>
        <span
          className="bg-teal-500 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center
          absolute top-1 left-5 text-white"
        >
          {useStore.cart.length}
        </span>
      </div>

      {useStore.isOpen && <CartDrawer />}
    </>
  );
}
