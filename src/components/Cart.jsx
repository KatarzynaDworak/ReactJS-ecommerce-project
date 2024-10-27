import React from "react";
import useStore from "../stores/store";
import Navbar from "./Navbar";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-md bg-pink-100">
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => decrementQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
