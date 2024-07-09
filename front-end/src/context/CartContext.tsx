// // context/CartContext.tsx
// import React, { createContext, useContext, useState } from "react";

// // Define the shape of a cart item
// export interface CartItem {
//   title: string;
//   price: number;
//   image: string;
//   count: number;
// }

// // Define the initial data for the cart
// const initialCartItems: CartItem[] = [
//   {
//     title: "Denim Blue Jeans",
//     price: 134,
//     image: "/assets/images/DenimBlueJeans.png",
//     count: 1,
//   },
//   {
//     title: "Yellow Casual Sweater",
//     price: 80,
//     image: "/assets/images/YellowCasualSweater.png",
//     count: 1,
//   },
//   {
//     title: "Silver High Neck Sweater",
//     price: 220,
//     image: "/assets/images/SilverHighNeckSweater.png",
//     count: 1,
//   },
// ];

// // Create context for the cart
// export const CartContext = createContext<CartItem[]>(initialCartItems);

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);

// // Cart provider component
// export const CartProvider = ({ children }: any) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

//   const updateItemCount = (index: number, newCount: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item, i) =>
//         i === index ? { ...item, count: newCount } : item
//       )
//     );
//   };

//   const removeItem = (index: number) => {
//     setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
//   };

//   return (
//     <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
//   );
// };
