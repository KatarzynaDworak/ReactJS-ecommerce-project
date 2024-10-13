import useStore from '../stores/store';

const ProductList = () => {
  const addToCart = useStore((state) => state.addToCart);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded-lg shadow-md">
          <h2 className="text-lg">{product.name}</h2>
          <p>${product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
