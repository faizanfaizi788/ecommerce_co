
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uiShowProductCategoryModel } from '../ui/uiSlice';
import { getRandomGradient } from '../../utils/utilities';
import { categoriesIcons } from '../../utils/categoriesIcons';

const ProductCategory = () => {
  const products = useSelector((state) => state.products);
  const productCategory = get(products, 'productCategory', {});
  const productSubCategory = get(products, 'productSubCategory', {});
  const dispatch = useDispatch();

  const handleShowCategoryModel = () => {
    // Dispatch the action to show the product category modal
    dispatch(uiShowProductCategoryModel(true));
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-4 m-20">
      {/* Horizontal layout for category title */}
      <div className="flex items-center justify-between">
        {/* Category Section Title */}
        <div>
          <h3 className="text-lg font-semibold">Category</h3>
        </div>

        {/* Icon and Category/Subcategory Titles Container */}
        <div className="flex items-center justify-center">
          {/* Icon container */}
          <div
            className="flex items-center justify-center rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            style={{ background: getRandomGradient(), width: '75px', height: '75px' }}
          >
            <FontAwesomeIcon
              icon={categoriesIcons[productCategory.iconName]}
              size="2x"
              className="text-white transition-transform duration-300 transform hover:rotate-12"
            />
          </div>

          {/* Category/Subcategory Titles */}
          <div className="ml-4 flex flex-col items-start">
            {/* Category Name */}
            <p className="text-lg font-semibold">{productCategory.name || 'Select Category'}</p>
            
            {/* Subcategory Name */}
            <p className="text-gray-500 text-xs mt-1">{productSubCategory.name || 'Select Subcategory'}</p>
          </div>
        </div>

        {/* Change Button - Aligned to the End */}
        <button
          className="text-blue-500 text-sm font-semibold hover:underline transition-all"
          onClick={() => handleShowCategoryModel()}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ProductCategory;
