// src/atoms/productsAtoms.ts
import { atom } from "recoil";

export type ProductItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  Images: Array<string>;
  rating: number;
  count: number;
  category: string;
};

const ProductsAtom = atom<ProductItem[]>({
  key: "products",
  default: [
    {
      id: "1",
      title: "Sunglasses for Woman",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 134,
      Images: [
        "https://i.imgur.com/Ti3Qp6i.jpeg",
        "https://i.imgur.com/U3uedSx.jpeg",
        "https://i.imgur.com/riLdbL3.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "women",
    },
    {
      id: "2",
      title: "Leather Backpack",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 80,
      Images: [
        "https://i.imgur.com/hmJpmhE.jpeg",
        "https://i.imgur.com/WRi9fbQ.jpeg",
        "https://i.imgur.com/ABKubq4.jpeg",
        "https://i.imgur.com/5zCiwoP.jpeg",
      ],
      rating: 4,
      count: 1,
      category: "women",
    },
    {
      id: "3",
      title: "Heavy Jacket",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 220,
      Images: [
        "https://i.imgur.com/99uQcxa.jpeg",
        "https://i.imgur.com/zuSlZWU.png",
      ],
      rating: 4.5,
      count: 1,
      category: "man",
    },
    {
      id: "4",
      title: "Watch With Leather Strap",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 134,
      Images: [
        "https://i.imgur.com/vIuIZBO.jpeg",
        "https://i.imgur.com/Xso8aAg.jpeg",
        "https://i.imgur.com/vL71FN4.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "man",
    },
    {
      id: "5",
      title: "Light Jacket",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 80,
      Images: [
        "https://i.imgur.com/p62ugDO.jpeg",
        "https://i.imgur.com/LHqZBUw.jpeg",
        "https://i.imgur.com/gd1nwSe.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "man",
    },
    {
      id: "6",
      title: "Gold Ring",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 220,
      Images: [
        "https://i.imgur.com/gGPk3wb.jpeg",
        "https://i.imgur.com/2Q8ELSr.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "women",
    },
  ],
});

export const totalAtom = atom({
  key: "total",
  default: 0,
});

export const checkedProductsAtom = atom<ProductItem>({
  key: "checkedProducts",
  default: {
    id: "",
    title: "",
    description: "",
    price: 0,
    Images: [],
    rating: 0,
    count: 0,
    category: "",
  },
});

export default ProductsAtom;
