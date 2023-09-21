import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer outer-padding ">
      <section className="footer-section_left">
        <h2 className="footer-title">Furniture</h2>
        <p className="footer-paragraph">
          Furniture is an online retailer that fulfills demand by offering a
          wide selection of high-quality, exemplary designed furniture.
        </p>
      </section>
      <section className="footer-section_right">
        <ul className="flex-col">
          <h3>Product</h3>
          <li>New Arrivals</li>
          <li>Best Selling</li>
          <li>Home Decor</li>
          <li>Kitchen Set</li>
        </ul>
        <ul className="flex-col">
          <h3>Services</h3>
          <li>Catalog</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul>
        <ul className="flex-col">
          <h3>Follow Us</h3>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
