/** This is a React component that provides a context for managing a shopping cart. It imports the
 * necessary hooks and components from React, creates a context using `createContext()`, and defines a
 * provider component using `useState()` and `useRef()` hooks. The provider component passes down the
 * necessary state and functions to its children through the context provider. It also renders a
 * `ShoppingCart` component that displays the items in the cart and allows the user to add, remove, or
 * clear items from the cart. 
 */
import { createContext, useState, useRef, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";

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

/* LEARNING NOTE
 * This `useEffect()` hook is adding and removing an event listener to the window for the "mousedown" event. 
 * When the event is triggered, it checks if the click was outside of the shopping cart component (using
 * the `cartRef` reference) and if so, it sets the `shoppingCartOpen` state to `false`. The
 * `useEffect()` hook is dependent on the `setShoppingCartOpen` function, which means it will only
 * run when `setShoppingCartOpen` changes. This is used to ensure that the event listener is added
 * and removed only when necessary, and not on every re-render of the component. 
 * the onMouseDown wouldn't be sufficient in this case, the changes in structure would be necesarry*/
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
        } z-20 fixed top-44 right-0 h-1/2 lg:w-4/12 sm:w-8/12 w-full flex flex-col bg-stone-300 p-5`}
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
