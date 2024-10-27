import { Link } from 'react-router-dom';
import useStore from '../stores/store';

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
        <nav className="bg-custom-pink text-custom-dark p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-custom-dark">
          MyCosmetics
        </Link>
        <Link to="/cart" className="flex items-center space-x-2">
          <span>Cart</span>
          <span className="bg-custom-cta text-white rounded-full px-3 py-1 text-sm">
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
