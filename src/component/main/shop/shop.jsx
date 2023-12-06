import React, { useEffect, useState } from "react";
import Product from "./product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className=" col-9">
          <div className="list-container mt-5">
            {products.map((product) => (
              // console.log(product)
              <Product info={product}></Product>
            ))}
          </div>
        </div>
        <div className=" col-3 p-4 bg-warning-subtle">
          <h4 className=" text-center mt-5">Order Summary</h4>
          <p>Selected Items: 6</p>
          <p>Total Price: $1140</p>
          <p>Total Shipping Charge: $5</p>
          <p>Tax: $114</p>
          <h6 className=" mb-5">Grand Total: $1559</h6>
          <p>
            <button type="button" className="btn btn-danger px-5">
              Clear Cart
            </button>
          </p>
          <p>
            <button type="button" className="btn btn-warning px-5">
              Review Order
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
