// src/atoms/cartAtom.ts
import { atom } from "recoil";

export type CartItem = {
  title: string;
  price: number;
  image: string;
  count: number;
};

const CartAtom = atom<CartItem[]>({
  key: "cart",
  default: [
    {
      title: "Denim Blue Jeans",
      price: 134,
      image: "/assets/images/DenimBlueJeans.png",
      count: 1,
    },
    {
      title: "Yellow Casual Sweater",
      price: 80,
      image: "/assets/images/YellowCasualSweater.png",
      count: 1,
    },
    {
      title: "Silver High Neck Sweater",
      price: 220,
      image: "/assets/images/SilverHighNeckSweater.png",
      count: 1,
    },
  ],
});

export const totalAtom = atom({
  key: "total",
  default: 0,
});

export default CartAtom;
