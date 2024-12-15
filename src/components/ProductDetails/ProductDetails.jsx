import React, { useState, useEffect } from "react";
import { getProductId } from "../../ApiService/api";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductId(id);
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleBuyNow = () => {
    alert("The product is out of Stock :(");
  };

  return (
    <div className="page-container">
      {productDetails ? (
        <div className="product-details">
          <div className="product-image-wrapper">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="product-image"
            />
          </div>
          <div className="product-content">
            <h1 className="product-title">{productDetails.title}</h1>
            <p className="product-description">{productDetails.description}</p>
            <p className="product-price">Price: ${productDetails.price}</p>
            <div className="product-actions">
              <button className="buy-now-button" onClick={handleBuyNow}>
                Buy Now
              </button>
              <Link to="/">
                <button className="go-back-button">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
