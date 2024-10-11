import React from 'react';
import { useSelector } from 'react-redux';
import ProductCardItem from './ProductCardItem';

const ProductCardItemCollection = () => {
  // Get all products from the Redux store
  const products = useSelector((state) => state.products.productsCollection);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCardItem key={product._id} productId={product._id} />
          ))
        ) : (
          <div className="text-center text-red-500 col-span-full">No products available</div>
        )}
      </div>
    </div>
  );
};

export default ProductCardItemCollection;
