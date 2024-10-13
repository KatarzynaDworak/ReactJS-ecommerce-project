import { Link } from 'react-router-dom';
import useStore from '../stores/store';

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <nav className="bg-custom-red text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyCosmetics</Link>
        <Link to="/cart" className="flex items-center space-x-2">
          <span>Cart</span>
          <span className="bg-white text-custom-red rounded-full px-2 py-1 text-sm">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
