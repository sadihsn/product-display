import React, { useState } from "react";
import ProductCard from "./components/ProductCard"; // Ensure the correct path

const App = () => {
  // Initial product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://via.placeholder.com/150",
      description: "This is product 1",
      isFavorited: false,
      isExpanded: false,
      features: ["Feature 1", "Feature 2", "Feature 3"],
      rating: 3,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      image: "https://via.placeholder.com/150",
      description: "This is product 2",
      isFavorited: false,
      isExpanded: false,
      features: ["Feature A", "Feature B", "Feature C"],
      rating: 4,
    },
    // Add more products as needed
  ]);

  // Toggle the favorite status
  const toggleFavorite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  };

  // Toggle the expanded state to show/hide features
  const toggleExpand = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isExpanded: !product.isExpanded }
          : product
      )
    );
  };

  // Change the rating of a product
  const changeRating = (id, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, rating: newRating } : product
      )
    );
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            toggleExpand={toggleExpand}
            changeRating={changeRating}
          />
        ))}
      </div>
    </div>
  );
};

export default App;