import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '../src/components/ProductList';
import Cart from '../src/components/Cart';
import Checkout from '../src/components/Checkout';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

