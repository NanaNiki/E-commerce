import { createContext, useState } from 'react'
import ShoppingCart from './ShoppingCart'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(1);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

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
          item.id === plant.id ? { ...exist, quantity: exist.quantity + 1 } : item
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

  return (
    <ShoppingCartContext.Provider value={{ cartItems, onAddToCart, onRemoveFromCart, updateQuantity, quantity, shoppingCartOpen, toggleShoppingCart }}>
      {children}
      <div className={`${shoppingCartOpen? "" : "hidden"} shoppingcart`}>      
      <ShoppingCart
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        setShoppingCartOpen={setShoppingCartOpen}/>
      </div>
    </ShoppingCartContext.Provider>
  )

}