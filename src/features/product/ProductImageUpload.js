import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const MAX_IMAGES = 10; // Maximum number of images allowed

const ProductImageUpload = () => {
  const [images, setImages] = useState([]); // State to store uploaded images
  const [error, setError] = useState(''); // State for error message

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    // Check if adding new images exceeds the limit
    if (images.length + files.length > MAX_IMAGES) {
      setError(`You can upload a maximum of ${MAX_IMAGES} images.`);
      return;
    }

    // Clear error if valid
    setError('');
    
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  // Handle image removal
  const handleImageRemove = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mt-4 m-20 bg-white">
      <h3 className="text-lg font-semibold mb-4">Upload Images</h3>

      {/* Image Upload Section */}
      <div
        className={`border-dashed border-2 border-gray-400 rounded-lg p-4 text-center transition-all ${
          images.length >= MAX_IMAGES ? 'opacity-50' : ''
        }`}
      >
        <label htmlFor="imageUpload" className={`cursor-pointer ${images.length >= MAX_IMAGES ? 'pointer-events-none' : ''}`}>
          <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faUpload} size="3x" className="text-gray-500 mb-2" />
            <p className="text-gray-500">Click or drag images to upload</p>
          </div>
          <input
            id="imageUpload"
            type="file"
            multiple
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={images.length >= MAX_IMAGES} // Disable input if max images reached
          />
        </label>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Preview of uploaded images */}
      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Uploaded preview ${index}`}
                className="rounded-lg w-full h-40 object-cover"
              />
              {/* Remove Button */}
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => handleImageRemove(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Instructional text */}
      <p className="text-gray-500 text-sm mt-4">
        {`You have uploaded ${images.length} of ${MAX_IMAGES} images.`}
        <br />
        Click on the image to remove it.
      </p>
    </div>
  );
};

export default ProductImageUpload;
