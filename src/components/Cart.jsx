import useStore from '../stores/store';

const Cart = () => {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removeFromCart);
  
    return (
          <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                  ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-md bg-custom-light shadow-sm">
                        <div>
                          <h3 className="text-lg font-medium text-custom-dark">{item.name}</h3>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                        <button
                          className="text-custom-cta hover:text-red-600"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              )}
    </div>

    );
  };  

export default Cart;
