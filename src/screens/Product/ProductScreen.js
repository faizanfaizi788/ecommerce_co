import React from 'react';
import HeaderBack from '../../components/HeaderBack';
import { ADD_POST } from '../../constant/variables';
import ProductCategoryUpdateModel from '../../features/product/ProductCategoryUpdateModel';
import ProductCategory from '../../features/product/ProductCategory';
import ProductImageUpload from '../../features/product/ProductImageUpload';
import ProductDescriptionForm from '../../features/product/ProductDescriptionForm';

export default function ProductScreen() {

  return (
    <div>
      <HeaderBack title={ADD_POST} />
      <ProductCategory />
      <ProductCategoryUpdateModel />
      <ProductImageUpload />
      <ProductDescriptionForm />
    </div>
  );
}
