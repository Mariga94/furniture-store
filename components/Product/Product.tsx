import React from "react";
import Image from "next/image";
import './Product.css'
import chair1 from "../../public/assets/chair-1.jpg";
const Product = () => {
  return (
    <div className="product flex-col">
      <Image src={chair1} height={360} width={394} alt="" />
      <div className="product-info">
        <p className="product-category">Chair</p>
        <h4 className="product-name">This is name of char</h4>
        <h4 className="product-price">$30.90</h4>
      </div>
    </div>
  );
};

export default Product;
