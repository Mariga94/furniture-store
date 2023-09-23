import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer outer-padding ">
      <section className="footer-section_left">
        <h3>Furniture</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quidem
          quisquam soluta dolores delectus odit eius expedita modi itaque non
          in, harum, beatae, minima accusamus quasi ipsam temporibus. Ipsum,
          veritatis!
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
