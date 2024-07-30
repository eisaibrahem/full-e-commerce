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
    {
      id: "7",
      title: "Light T-Shirt",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 20,
      Images: [
        "https://i.imgur.com/d7oblcR.jpg",
        "https://i.imgur.com/28X8QlN.jpg",
        "https://i.imgur.com/yycjhzl.jpg",
      ],
      rating: 3,
      count: 1,
      category: "man",
    },
    {
      id: "8",
      title: "Scatter T-Shirt",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 20,
      Images: [
        "https://i.imgur.com/ZIgl1K4.jpg",
        "https://i.imgur.com/VhCZtaf.jpg",
      ],
      rating: 3,
      count: 1,
      category: "women",
    },
    {
      id: "9",
      title: "Handbag With Wallet",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 12,
      Images: [
        "https://i.imgur.com/Mu6dZ28.jpg",
        "https://i.imgur.com/gNw45nT.jpg",
        "https://i.imgur.com/ZnF2cUv.jpg",
      ],
      rating: 5,
      count: 1,
      category: "man",
    },
    {
      id: "10",
      title: "Light Dress",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 25,
      Images: [
        "https://i.imgur.com/xLqAsoY.jpg",
        "https://i.imgur.com/0YMmJEN.jpg",
      ],
      rating: 3.5,
      count: 1,
      category: "women",
    },
    {
      id: "11",
      title: "Light Wallet",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 20,
      Images: [
        "https://i.imgur.com/7ii3QE6.jpg",
        "https://i.imgur.com/zBNBAoK.jpg",
        "https://i.imgur.com/xz5Ya8v.jpg",
        "https://i.imgur.com/jle8VRl.jpg",
        "https://i.imgur.com/WSIPpci.jpg",
        "https://i.imgur.com/aaBV79z.jpg",
      ],
      rating: 3.5,
      count: 1,
      category: "women",
    },
    {
      id: "12",
      title: "Sleeping Dress",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 25,
      Images: [
        "https://i.imgur.com/oU3vHFj.jpeg",
        "https://i.imgur.com/MxJeryU.jpeg",
        "https://i.imgur.com/vJ4kLQA.jpeg",
        "https://i.imgur.com/ch4sNu1.jpeg",
        "https://i.imgur.com/Elnotey.jpeg",
      ],
      rating: 3.5,
      count: 1,
      category: "women",
    },
    {
      id: "13",
      title: "Bump Jacket",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 105,
      Images: [
        "https://i.imgur.com/vgYsVv6.jpeg",
        "https://i.imgur.com/rAnpdSb.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "man",
    },
    {
      id: "14",
      title: "Small Dress",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 15,
      Images: [
        "https://i.imgur.com/o22s4WS.jpeg",
        "https://i.imgur.com/OpAgK0h.jpeg",
        "https://i.imgur.com/VwwhxH5.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "women",
    },
    {
      id: "15",
      title: "T-Shirt With Sleeve",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 18,
      Images: [
        "https://i.imgur.com/qarIzpZ.jpeg",
        "https://i.imgur.com/8ZS6mKz.jpeg",
        "https://i.imgur.com/iOfkGVO.jpeg",
      ],
      rating: 4.5,
      count: 1,
      category: "man",
    },
    {
      id: "16",
      title: "jeans Dress",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 35,
      Images: [
        "https://i.imgur.com/JFqU9hL.jpeg",
        "https://i.imgur.com/3egdEVP.jpeg",
      ],
      rating: 4.0,
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

export const currentPageAtom = atom({
  key: "currentPage",
  default: 1,
});

export const productsPerPage = 9;

export default ProductsAtom;
