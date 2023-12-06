import React from "react";
import "./product.css";
const Product = (props) => {
  const { info } = props;
  return (
    <div className=" mx-5 main-cart">
      <img src={info.image} alt="" className=" w-100  h-50 mt-5 m-2 pImage" />
      <h6>{info.title}</h6>
      <p>Price: {info.price}</p>
      <p>Rating {info.rating.rate}</p>
      <button className="btn btn-warning px-5" type="button">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
