import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  products: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = products.find((product) => product.id === item.id);

    if (existingItem) {
      incrementQuantity(existingItem.id);
    } else {
      setProducts((prevItem) => [...prevItem, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setProducts((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id: number) => {
    setProducts((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setProducts((prevItem) =>
      prevItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
