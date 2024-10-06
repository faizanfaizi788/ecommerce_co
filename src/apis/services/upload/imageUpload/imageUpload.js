import axios from 'axios';

export const imageUpload = async (images) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

    // Check if Cloudinary cloud name and upload preset are defined
    if (!process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || !process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET) {
        throw new Error('Cloudinary configuration is not defined.');
    }

    // Create an array of upload promises
    const uploadPromises = images.map(async (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);        

        // Log the form data being sent
        console.log('Uploading image:', image);
        console.log('Form Data:', formData);

        try {
            const response = await axios.post(cloudinaryUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data.secure_url; // Return the uploaded image URL
        } catch (error) {
            // Log the error details
            console.error('Error uploading image:', error.response.data);
            throw new Error('Error uploading images. Please try again.');
        }
    });

    try {
        // Wait for all uploads to complete
        const results = await Promise.all(uploadPromises);
        return results; // Return the array of uploaded image URLs
    } catch (error) {
        console.error('Error uploading images:', error);
        throw new Error('Error uploading images. Please try again.');
    }
};
