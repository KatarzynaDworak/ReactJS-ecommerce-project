import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-pink-100 text-center py-10">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to MyCosmetics Shop</h1>
        <p className="text-gray-700 mt-4">Discover your beauty essentials with ease!</p>
      </header>
      <main className="p-6">
        <ProductList />
      </main>
    </div>
  );
};

export default Home;
