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
      {/* Header */}
      <header className="home-header">
        <h1 className="home-title">Welcome to CCC Store</h1>
        <p className="home-subtitle">Browse our collection of amazing products:</p>
      </header>

      {/* Product Section */}
      <section className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <article
              className="product-card"
              key={product.id}
              role="article"
              aria-label={product.title}
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                loading="lazy"
              />
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <Link to={`/product/${product.id}`} className="product-link">
                  <button className="product-details-button">View Details</button>
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 CCC Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
