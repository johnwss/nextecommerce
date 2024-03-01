import {create} from 'zustand';
import { persist } from "zustand/middleware";
import { ProductType} from "./types/ProductType";

type CartState = {
    cart: ProductType[],
    addProduct:(product: ProductType) => void;
    removeProduct:(productId: string) => void;
    isOpen: boolean,
    toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
     cart:[],
     addProduct:(product) =>
     set((state))
     isOpen: false,
     toggleCart: () => set((state) => ({isOpen: !state.isOpen})),   
    }), {name: 'cart-storage'})
);