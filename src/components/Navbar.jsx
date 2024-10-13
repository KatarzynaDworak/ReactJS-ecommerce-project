import { Link } from 'react-router-dom';
import useStore from '../stores/store';

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <Link to="/" className="text-xl font-bold">Shop</Link>
        <Link to="/cart" className="text-lg">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
