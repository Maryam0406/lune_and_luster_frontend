
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import products from '../data/products';

const CartContext = createContext(null);
const KEY = 'lune-luster-cart';

function load() {
  try {
    // local storage stores data as strings, so parse it to a JS object
    const saved = JSON.parse(localStorage.getItem(KEY));

    // restores the previous cart
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  // each item
  const [items, setItems] = useState(load);

  // save every change
  useEffect(() => {
    try {
      // convert to string and save to local storage
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
    }
  }, [items]);

  // increase the quantity of a product of the same color
  const addItem = (id, color, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === id && i.color === color);

      if (found) {
        return prev.map((i) =>
          i === found
            ? { ...i, qty: Math.min(10, i.qty + qty) }
            : i
        );
      }

      return [...prev, { id, color, qty }];
    });

  // update the quantity of an existing cart item
  // minimum quantity: 1, maximum quantity: 10
  const setQty = (id, color, qty) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.color === color
          ? { ...i, qty: Math.max(1, Math.min(10, qty)) }
          : i
      )
    );

  // remove a product matching the given ID and colour
  const removeItem = (id, color) =>
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.color === color))
    );

  // clear the entire cart
  const clear = () => setItems([]);

  // attach full product information to each cart item
  const lines = useMemo(
    () =>
      items
        .map((i) => {
          const product = products.find((p) => p.id === i.id);
          return product ? { ...i, product } : null;
        })
        .filter(Boolean),
    [items]
  );

  // calculate total quantity and subtotal
  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.qty * l.product.price, 0);

  return (
    <CartContext.Provider
      value={{ lines, count, subtotal, addItem, setQty, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
