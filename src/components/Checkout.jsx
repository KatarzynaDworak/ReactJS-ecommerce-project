import useStore from '../stores/store';

const Checkout = () => {
    const clearCart = useStore((state) => state.clearCart);
  
    const handleCheckout = () => {
      alert('Thank you for your purchase!');
      clearCart();
    };
  
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
        <p className="mb-4 text-gray-700">Review your order and finalize your purchase.</p>
        <button
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          onClick={handleCheckout}
        >
          Finalize Purchase
        </button>
      </div>
    );
  };  

export default Checkout;
