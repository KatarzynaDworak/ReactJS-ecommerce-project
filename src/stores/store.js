import { create } from 'zustand';

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

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

      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      saveCartToLocalStorage(updatedCart); 
      return { cart: updatedCart };
    }),

  incrementQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  decrementQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveCartToLocalStorage([]); 
    return { cart: [] };
  },
}));

export default useStore;
