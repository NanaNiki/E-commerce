import { createContext, useState, useRef, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
import { setMiniNavOpen } from "./Navbar.js";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [miniNavOpen, setMiniNavOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleShoppingCart = () => {
    if (shoppingCartOpen === false) {
      setShoppingCartOpen(true);
    } else {
      setShoppingCartOpen(false);
    }
  };

  function updateQuantity(type) {
    if (type === "add") {
      if (quantity >= 50) {
        return;
      }
      setQuantity((prev) => prev + 1);
    } else if (type === "remove") {
      if (quantity <= 1) {
        return;
      }
      setQuantity((prev) => prev - 1);
    }
  }

  const onAddToCart = (plant, quantity) => {
    const exist = cartItems.find((item) => item.id === plant.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === plant.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...plant, quantity }]);
    }
  };

  const onRemoveFromCart = (plant) => {
    const exist = cartItems.find((item) => item.id === plant.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== plant.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === plant.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  const onClearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShoppingCartOpen(false);
      }
    };
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [setShoppingCartOpen]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        onAddToCart,
        onRemoveFromCart,
        onClearCart,
        updateQuantity,
        quantity,
        shoppingCartOpen,
        toggleShoppingCart,
        miniNavOpen,
        setMiniNavOpen,
      }}
    >
      {children}
      <div
        className={`${
          shoppingCartOpen ? "slide-in" : "slide-out"
        } fixed top-44 right-0 z-20 h-1/2 lg:w-4/12 sm:w-8/12 w-full flex flex-col bg-stone-300 p-5`}
        ref={cartRef}
      >
        <ShoppingCart
          cartItems={cartItems}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          setShoppingCartOpen={setShoppingCartOpen}
          setMiniNavOpen={setMiniNavOpen}
        />
      </div>
    </ShoppingCartContext.Provider>
  );
};
