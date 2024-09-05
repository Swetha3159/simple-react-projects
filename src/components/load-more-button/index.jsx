import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabled] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    console.log(products.length);
    if (products && products.length === 194) {
      setDisabled(true);
    }
  }, [products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=30&skip=${
          count === 0 ? 0 : count * 30
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);

        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };
  if (loading) {
    return <div>Loading Products !! Please Wait</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => {
              return (
                <div className="product">
                  <img
                    key={product.id}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <p>{product.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <button
          disabled={disabledButton}
          className="button-container"
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disabledButton ? <p>You have reached maximum Limit</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreButton;
