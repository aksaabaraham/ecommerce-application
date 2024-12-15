import React, { useState, useEffect } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/api";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to CCC Store</h1>
      <p>Browse our collection of amazing products:</p>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="product-details-button">View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
