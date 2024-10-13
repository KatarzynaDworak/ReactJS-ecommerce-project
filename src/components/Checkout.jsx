import useStore from '../stores/store';

const Checkout = () => {
  const clearCart = useStore((state) => state.clearCart);

  const handleCheckout = () => {
    // Logika finalizacji zakupu
    alert('Thank you for your purchase!');
    clearCart();
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg mb-4">Checkout</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleCheckout}
      >
        Finalize Purchase
      </button>
    </div>
  );
};

export default Checkout;
