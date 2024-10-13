import useStore from '../stores/store';

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
