"use client";

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";

export default function CartDrawer() {
  const useStore = useCartStore();

  const totalPrice = useStore.cart.reduce((acc, el) => {
  return acc + el.price! * el.quantity!;
  }, 0);

  return (
    <div
      onClick={() => useStore.toggleCart()}
      className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-8 overflow-y-scroll"
      >
        <button
          onClick={() => useStore.toggleCart()}
          className="font-bold text-sm text-teal-600"
        >
          Voltar para Loja
        </button>
        <div className="border-t border-gray-400 my-4"></div>
        <h1>Seu carrinho</h1>
        {useStore.cart.map((el) => (
          <div className="flex gap-4 py-4" key={el.id}>
            <Image
              src={el.image}
              alt={el.name}
              width={120}
              height={120}
              className="object-cover w-24 "
            />
            <div>
              <h2 className="w-42 truncate">{el.name}</h2>
              <h2>Quantidade: {el.quantity}</h2>
              <p className="text-teal-600 text-sm font-bold">
                {formatPrice(el.price)}
              </p>
              <button
                className="py-1 px-2 border rounder-md mt-2 text-sm mr-1"
                onClick={() => useStore.addProduct(el)}
              >
                Adicionar
              </button>
              <button
                onClick={() => useStore.removeProduct(el)}
                className="py-1 px-2 border rounder-md mt-2 text-sm"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
        {useStore.cart.length > 0  && useStore.onCheckout === 'cart' && (
          <div>
            <p className="text-teal-600 font-bold">Total: {formatPrice(totalPrice)}</p>
            <button onClick={() => useStore.setCheckout('checkout')} className="w-full rounded-md bg-teal-600 text-white py-2 mt-2">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
}
