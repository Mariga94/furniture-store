import React from "react";
import Image from "next/image";
import chair from "@/public/assets/chair-1.jpg";
import '@/styles/productdetail.css'
const ProductDetail = () => {
  return (
    <div className="product-detail container flex-col">
      <section className="flex-row product-detail_section">
        <Image src={chair} width={600} height={600} alt="" />
        <section className="product-detail-info flex-col">
          <h2>White Aesthetic Chair</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa,
            iste quas asperiores amet voluptas dolorem tempore sint, quaerat
            possimus cum reiciendis expedita obcaecati! Voluptatum obcaecati ab
            ipsam nisi rem?
          </p>
          <h2>$99.98</h2>
          <div className="flex-row btn-group">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn"> Add to Cart</button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductDetail;
