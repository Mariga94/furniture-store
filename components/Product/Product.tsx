import React from "react";
import Image from "next/image";
import './Product.css'
import chair1 from "../../public/assets/chair-1.jpg";
const Product = () => {
  return (
    <div className="product">
      <Image src={chair1} height={360} width={394} alt="" />
      <div className="product-info">
        <p className="product-category">Chair</p>
        <p className="product-name">This is name of char</p>
        <p className="product-price">$30.90</p>
      </div>
    </div>
  );
};

export default Product;
