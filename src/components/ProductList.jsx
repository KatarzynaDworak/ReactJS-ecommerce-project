import useStore from '../stores/store';
import productImage1 from '../assets/product1.png'; 
import productImage2 from '../assets/product2.png';  
import productImage3 from '../assets/product3.png';  
import productImage4 from '../assets/product4.png';  
import productImage5 from '../assets/product5.png';  
import productImage6 from '../assets/product6.png';  
import productImage7 from '../assets/product7.png';  
import productImage8 from '../assets/product8.png';  


const ProductList = () => {
  const addToCart = useStore((state) => state.addToCart);
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: productImage1 },  
    { id: 2, name: 'Product 2', price: 15, image: productImage2 },  
    { id: 3, name: 'Product 3', price: 12, image: productImage3 },  
    { id: 4, name: 'Product 4', price: 27, image: productImage4 },  
    { id: 5, name: 'Product 5', price: 25, image: productImage5 },  
    { id: 6, name: 'Product 6', price: 28, image: productImage6 },  
    { id: 7, name: 'Product 6', price: 36, image: productImage7 },  
    { id: 8, name: 'Product 6', price: 19, image: productImage8 },  
  ];

  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h2 className="text-lg font-semibold mb-2 text-custom-dark">{product.name}</h2>
              <p className="text-gray-500">${product.price}</p>
              <button
                className="mt-4 w-full bg-custom-cta text-white py-2 rounded-md hover:bg-pink-700 transition-colors font-semibold"
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
