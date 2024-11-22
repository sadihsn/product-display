import React from "react";
import StarRating from "./StarRating"; // Ensure the correct path

const ProductCard = ({ product, toggleFavorite, toggleExpand, changeRating }) => {
  return (
    <div className={`product-card ${product.isFavorited ? "favorited" : ""}`}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button onClick={() => toggleFavorite(product.id)}>
        {product.isFavorited ? "❤️" : "🤍"} Favorite
      </button>

      <button onClick={() => toggleExpand(product.id)}>
        {product.isExpanded ? "Hide Features" : "Show Features"}
      </button>

      {product.isExpanded && (
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {/* Add Star Rating */}
      <StarRating
        rating={product.rating}
        onRatingChange={(rating) => changeRating(product.id, rating)} // Pass the rating change handler
      />
    </div>
  );
};

export default ProductCard;