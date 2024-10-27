import { Link } from "react-router-dom";
import useStore from "../stores/store";

const Navbar = () => {
  const cart = useStore((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-pink-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyCosmetics</Link>
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="flex items-center">
            <span>Cart</span>
            <span className="bg-white text-pink-500 ml-2 rounded-full px-2 py-1 text-sm">
              {totalItems}
            </span>
          </Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
