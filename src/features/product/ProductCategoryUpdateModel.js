import React, { useState, useEffect } from 'react';
import { uiShowProductCategoryModel } from '../ui/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productsAddCategory, productsAddSubCategory } from './productsSlice';
import { selectCategories } from '../categories/categoriesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const ProductCategoryUpdateModel = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const categories = useSelector(selectCategories);
  const previouslySelectedCategory = useSelector((state) => state.products.selectedCategory); // Assuming this is where selected category is stored
  const previouslySelectedSubCategory = useSelector((state) => state.products.selectedSubCategory); // Assuming subcategory is stored

  const [selectedCategory, setSelectedCategory] = useState(null); // Local state for selected category
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // Local state for selected subcategory

  useEffect(() => {
    // Set previously selected category and subcategory when the modal opens
    if (ui.isProductCategoryModel) {
      setSelectedCategory(previouslySelectedCategory || null);
      setSelectedSubCategory(previouslySelectedSubCategory || null);
    }
  }, [ui.isProductCategoryModel, previouslySelectedCategory, previouslySelectedSubCategory]);

  const handleCategorySelect = (category) => {
    // Toggle the selected category
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
    setSelectedSubCategory(null); // Reset subcategory when changing category
  };

  const handleSubCategorySelect = (subcat) => {
    setSelectedSubCategory(selectedSubCategory?.id === subcat.id ? null : subcat); // Toggle selected subcategory
  };

  const handleDone = () => {
    if (selectedCategory) {
      dispatch(productsAddCategory(selectedCategory)); // Dispatch selected category
    }
    if (selectedSubCategory) {
      dispatch(productsAddSubCategory(selectedSubCategory)); // Dispatch selected subcategory
    }
    handleCloseModel(); // Close the modal after selection
  };

  const handleCloseModel = () => {
    setSelectedCategory(null); // Reset selected category on close
    setSelectedSubCategory(null); // Reset selected subcategory on close
    dispatch(uiShowProductCategoryModel(false));
  };

  if (!ui.isProductCategoryModel) {
    return null; // Render nothing if the modal isn't visible
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg overflow-hidden">
        <h3 className="text-lg font-semibold mb-4">Select Category</h3>

        {/* Scrollable Category List */}
        <div className="max-h-72 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} id={`category-${category.id}`}>
              <button
                onClick={() => handleCategorySelect(category)}
                className={`flex items-center justify-between w-full text-left p-3 border rounded hover:bg-gray-200 ${
                  selectedCategory?.id === category.id ? 'bg-gray-300' : ''
                }`}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={category.icon} className="mr-2" />
                  {category.name}
                </div>
                {/* Show chevron icon based on selected state */}
                <FontAwesomeIcon icon={selectedCategory?.id === category.id ? faChevronDown : faChevronRight} />
              </button>

              {/* Display subcategories if this category is selected */}
              {selectedCategory?.id === category.id && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map((subcat) => (
                    <div key={subcat.id} className="flex items-center">
                      <button
                        onClick={() => handleSubCategorySelect(subcat)}
                        className={`flex items-center w-full text-left p-3 rounded-lg border ${
                          selectedSubCategory?.id === subcat.id ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{subcat.name}</span>
                          {/* Show selected mark like a radio button */}
                          {selectedSubCategory?.id === subcat.id && (
                            <span className="ml-2 text-white">●</span> // Show a filled circle to indicate selection
                          )}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleCloseModel}
            className="bg-gradient-to-r from-red-500 to-red-700 rounded-full text-white py-2 px-4 hover:bg-opacity-80" // Red gradient for Cancel button
          >
            Cancel
          </button>
          <button
            onClick={handleDone}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white py-2 px-4 hover:bg-opacity-80" // Blue gradient for Done button
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryUpdateModel;
