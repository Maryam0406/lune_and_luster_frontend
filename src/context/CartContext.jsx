import { createContext, useState, useEffect, useMemo, useState } from 'react';
import products from '../data/products';

const CartContext = createContext(null);
const KEY = 'lune-luster-cart';

function load() {
    try {
        //local storage stores data as strings, so parse it to a JS object
        const saved = JSON.parse(localStorage.getItem(KEY));
        //restores the previous cart
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

export function CartProvider({ children }) {
    //each item
    const [items, setItems] = useState(load);

  // save every change
  useEffect(() => {
    try { 
        //convery to string and save to local storage
        localStorage.setItem(KEY, JSON.stringify(items)); 
    } catch { 
    }    
  }, [items]);

  //increase the quantity of a product of the same color
  const addItem = (id, color, qty = 1) =>
    setItems((prev) => {
        const found = prev.find((i) => i.id === id && i.color === color); 
        if (found) return prev.map((i) => (i === found ? { ...i, qty: Math.min(10, i.qty + qty ) } : i));
        return [...prev, { id, color, qty }];
    });

    //setQty goes through the existing cart array, finds the item matching the given id and color,
    //and updates its quantity while keeping its other properties unchanged.
    //It restricts the quantity to a minimum of 1 and a maximum of 10; all other items remain unchanged
  const setQty = (id, color, qty) =>
    setItems((prev) =>
        prev.map((i) => (i.id === id && i.color === color ? { ...i, qty: Math.max(1, Math.min(10, qty)) } : i ))
    );

    //It takes the ID and color passed into the function and compares them with each item's ID and color in the existing cart (prev).
    //If both match, the item is removed; The unmatched ones are kept in a new array created by .filter().
    const removeItem = (id, color) => setItems((prev) => prev.filter((i) => !(i.id === id && i.color === color)));
    const clear = () => setItems([]);

    const lines = useMemo(
        () =>
            items.map((i) => {
                const product = products.find((p) => p.id === i.id);
                return product ? { ...i, product } : null;
            })
            .filter(Boolean),
        [items]
    );

    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = lines.reduce((sum, l) => sum + l.qty * l.product.price, 0);

    return (
    <CartContext.Provider value={{ lines, count, subtotal, addItem, setQty, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
}