import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { useGeolocated } from "react-geolocated";
import { addProduct } from '../../apis/services/product/productService';
import { imageUpload } from '../../apis/services/upload/imageUpload/imageUpload';

const AddProductForm = () => {
    const [images, setImages] = useState([]);
    const { register, handleSubmit, watch, formState: { errors }, reset, setValue } = useForm();

    // Geolocation Hook
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    });

    const onSubmit = async (data) => {
        try {
            console.log("onSubmit : data", data);
            const uploadedImages = await imageUpload(images);
            console.log("onSubmit : uploadedImages", uploadedImages);
            const formData = new FormData();

            // Append other form fields
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            // Append uploaded image URLs to the form data
            uploadedImages.forEach(url => {
                formData.append('images', url);
            });

            console.log("coords : coords", coords);

            // Add geolocation data as an array of numbers [longitude, latitude]
            if (coords) {
                formData.append('location', JSON.stringify([coords.longitude, coords.latitude]));
            }

            // Send POST request to backend API (update the URL accordingly)
            await addProduct(formData);
            alert('Product created successfully');
            reset(); // Reset form
            setImages([]); // Clear images
        } catch (error) {
            console.error(error);
            alert('Error creating product. Please try again.');
        }
    };

    // Categories for the Select dropdown
    const categories = [
        { value: 'Vehicles', label: 'Vehicles' },
        { value: 'Cars', label: 'Cars' },
        { value: 'Motorcycles', label: 'Motorcycles' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Furniture', label: 'Furniture' },
        { value: 'Fashion', label: 'Fashion' },
        { value: 'Jobs', label: 'Jobs' },
        { value: 'Services', label: 'Services' },
        { value: 'Books', label: 'Books' },
        { value: 'Sports Equipment', label: 'Sports Equipment' },
        { value: 'Pets', label: 'Pets' },
        { value: 'Agricultural Equipment', label: 'Agricultural Equipment' },
        { value: 'Baby Products', label: 'Baby Products' },
        { value: 'Health & Medical', label: 'Health & Medical' },
        { value: 'Miscellaneous', label: 'Miscellaneous' }
    ];

    // Handle image uploads
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        if (files.length + images.length > 10) {
            alert('You can only upload a maximum of 10 images');
            return;
        }
        setImages([...images, ...files]);
    };

    // Remove image by index
    const removeImage = (index) => {
        const newImages = images.filter((_, imgIndex) => imgIndex !== index);
        setImages(newImages);
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold my-4">Post Your Product</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block font-medium">Product Name</label>
                    <input
                        className={`input-field ${errors.name ? 'border-red-500' : ''} p-2 border rounded-lg w-full`}
                        {...register('name', { required: 'Product name is required' })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        className={`input-field ${errors.description ? 'border-red-500' : ''} p-2 border rounded-lg w-full`}
                        {...register('description', { required: 'Product description is required' })}
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Price ($)</label>
                    <input
                        type="number"
                        className={`input-field ${errors.price ? 'border-red-500' : ''} p-2 border rounded-lg w-full`}
                        {...register('price', { required: 'Product price is required' })}
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Category</label>
                    <Select
                        options={categories}
                        className="basic-single mb-4"
                        classNamePrefix="select"
                        name="category"
                        isClearable={true}
                        onChange={(selected) => {
                            setValue('category', selected ? selected.value : '');
                        }}
                        value={categories.find(cat => cat.value === watch('category'))}
                        styles={{
                            control: (base) => ({
                                ...base,
                                borderColor: errors.category ? 'red' : base.borderColor,
                                boxShadow: 'none',
                                '&:hover': {
                                    borderColor: errors.category ? 'red' : base.borderColor,
                                },
                            }),
                        }}
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Condition</label>
                    <select
                        className={`input-field ${errors.condition ? 'border-red-500' : ''} p-2 border rounded-lg w-full`}
                        {...register('condition', { required: 'Condition is required' })}
                    >
                        <option value="">Select Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                    {errors.condition && <p className="text-red-500 text-sm">{errors.condition.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Upload Images (max 10)</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="input-field p-2 border rounded-lg w-full"
                    />
                    <div className="flex flex-wrap mt-2">
                        {images.map((image, index) => (
                            <div key={index} className="relative w-1/3 p-1">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-lg border" // Increased height to 48
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}

                        {images.length > 0 && (
                            <div className="mt-2 text-sm">
                                {images.length} image{images.length > 1 ? 's' : ''} selected
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Phone Number</label>
                    <input
                        className={`input-field ${errors.phone ? 'border-red-500' : ''} p-2 border rounded-lg w-full`}
                        {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Email (optional)</label>
                    <input
                        className="input-field p-2 border rounded-lg w-full"
                        {...register('email')}
                    />
                </div>

                <div>
                    <label className="block font-medium">Location</label>
                    {!isGeolocationAvailable ? (
                        <p>Your browser does not support Geolocation</p>
                    ) : !isGeolocationEnabled ? (
                        <p>Geolocation is not enabled</p>
                    ) : coords ? (
                        <p className="text-sm">Latitude: {coords.latitude}, Longitude: {coords.longitude}</p>
                    ) : (
                        <p>Getting location data...</p>
                    )}
                </div>

                <button type="submit" className="btn-primary w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Post Product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
