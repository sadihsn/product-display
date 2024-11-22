import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, toggleFavorite, toggleExpand }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default ProductList;