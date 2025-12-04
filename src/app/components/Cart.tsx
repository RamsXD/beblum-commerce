"use client";

import { useCartStore } from "@/src/store";
import Image from "next/image";

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
          2
        </span>
      </div>

      {useStore.isOpen && (
        <div
          onClick={() => useStore.toggleCart()}
          className="fixed w-full h-screen bg-black/25 top-0 left-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll"
          >
            <h1>Meu carrinho</h1>
            {useStore.cart.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
