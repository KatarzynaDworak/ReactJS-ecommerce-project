import { create } from 'zustand';

// Funkcja pomocnicza do zapisywania w localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Funkcja pomocnicza do pobierania z localStorage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const useStore = create((set) => ({
  cart: getCartFromLocalStorage(), // Inicjalizacja koszyka z localStorage

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart); // Zapis do localStorage
      return { cart: updatedCart };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      saveCartToLocalStorage(updatedCart); // Zapis do localStorage
      return { cart: updatedCart };
    }),

  incrementQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToLocalStorage(updatedCart); // Zapis do localStorage
      return { cart: updatedCart };
    }),

  decrementQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveCartToLocalStorage(updatedCart); // Zapis do localStorage
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveCartToLocalStorage([]); // Czyścimy koszyk w localStorage
    return { cart: [] };
  },
}));

export default useStore;
