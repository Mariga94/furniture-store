import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer flex-row justify-center container">
      <section>
        <h4>Product</h4>
        <ul className="flex-col footer-nav">
          <li>New Arrivals</li>
          <li>Best selling</li>
          <li>Home Decor</li>
          <li>Kitchen Set</li>
        </ul>
      </section>
      <section>
        <h4>Services</h4>
        <ul className="flex-col footer-nav">
          <li>Catalog</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul>
      </section>
      <section>
        <h4>Follow Us</h4>
        <ul className="flex-col footer-nav align-center">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
