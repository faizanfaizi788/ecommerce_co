import React from 'react';
import HomeHeader from '../../features/home/HomeHeader';
import ProductCardItemCollection from '../../features/product/ProductCardItemCollection.js';

const HomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      {/* Add margin top and make it responsive */}
      <main className="flex-grow mt-10 px-3 sm:px-6 lg:px-8">
        <ProductCardItemCollection />
      </main>
    </div>
  );
};

export default HomeScreen;
