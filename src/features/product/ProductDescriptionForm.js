import React, { useState } from 'react';

const locations = ['Location 1', 'Location 2', 'Location 3']; // Mock locations data
const cities = ['City 1', 'City 2', 'City 3']; // Mock cities data
const neighbourhoods = ['Neighbourhood 1', 'Neighbourhood 2', 'Neighbourhood 3']; // Mock neighbourhoods data

const ProductDescriptionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('');
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (title.length < 5) newErrors.title = 'Title must be at least 5 characters.';
    if (description.length < 10) newErrors.description = 'Description must be at least 10 characters.';
    if (!selectedLocation) newErrors.location = 'Location is required.';
    if (!selectedCity) newErrors.city = 'City is required.';
    if (!selectedNeighbourhood) newErrors.neighbourhood = 'Neighbourhood is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission if valid
      console.log('Form Submitted:', {
        title,
        description,
        location: selectedLocation,
        city: selectedCity,
        neighbourhood: selectedNeighbourhood,
      });
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mt-4 m-20 bg-white">
      <h3 className="text-lg font-semibold mb-4">Product Description</h3>

      {/* Ad Title Input */}
      <div className="mb-4">
        <label htmlFor="adTitle" className="block text-sm font-medium text-gray-700">
          Ad Title <span className="text-red-500">*</span>
        </label>
        <input
          id="adTitle"
          type="text"
          className={`mt-1 block w-full p-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="text-sm text-gray-500 mt-1">{title.length} / 5 characters minimum</div>
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          className={`mt-1 block w-full p-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="text-sm text-gray-500 mt-1">{description.length} / 10 characters minimum</div>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Location Dropdown */}
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location <span className="text-red-500">*</span>
        </label>
        <select
          id="location"
          className={`mt-1 block w-full p-2 border rounded-md ${errors.location ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select a location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
      </div>

      {/* City Dropdown */}
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City <span className="text-red-500">*</span>
        </label>
        <select
          id="city"
          className={`mt-1 block w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
      </div>

      {/* Neighbourhood Dropdown */}
      <div className="mb-4">
        <label htmlFor="neighbourhood" className="block text-sm font-medium text-gray-700">
          Neighbourhood <span className="text-red-500">*</span>
        </label>
        <select
          id="neighbourhood"
          className={`mt-1 block w-full p-2 border rounded-md ${errors.neighbourhood ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
          value={selectedNeighbourhood}
          onChange={(e) => setSelectedNeighbourhood(e.target.value)}
        >
          <option value="">Select a neighbourhood</option>
          {neighbourhoods.map((neighbourhood, index) => (
            <option key={index} value={neighbourhood}>
              {neighbourhood}
            </option>
          ))}
        </select>
        {errors.neighbourhood && <p className="text-red-500 text-xs mt-1">{errors.neighbourhood}</p>}
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductDescriptionForm;
