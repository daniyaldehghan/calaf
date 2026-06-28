"use client";
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = { items: [] };
const init = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : initialState;
  }
  return initialState;
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };

    case "INCREASE":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        ),
      };

    case "DECREASE":
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] }, init);
  const addToCart = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const increase = (id) => dispatch({ type: "INCREASE", payload: id });
  const decrease = (id) => dispatch({ type: "DECREASE", payload: id });
  const remove = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ items: state.items }));
  }, [state.items]);
  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, increase, decrease, remove }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
