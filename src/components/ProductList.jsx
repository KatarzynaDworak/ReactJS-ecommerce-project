import useStore from '../stores/store';

const ProductList = () => {
    const addToCart = useStore((state) => state.addToCart);
    const products = [
      { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 15, image: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-4 w-full bg-custom-red text-white py-2 rounded-lg hover:bg-custom-red-light transition-colors"
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
