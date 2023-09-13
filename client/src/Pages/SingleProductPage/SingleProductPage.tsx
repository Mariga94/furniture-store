// import { useParams } from "react-router-dom";
import "./SingleProductPage.css";
// import image from "../../assets/daniil-silantev-1P6AnKDw6S8-unsplash.jpg";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { Counter, ImageSlider } from "../../Components";
import { useParams } from "react-router-dom";
import data from "../../data";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  useEffect(() => {
    const fetchProduct = (id: string | undefined) => {
      try {
        const obj = data.find((item) => item.id === id);
        setProduct(obj);
      } catch (error) {
        console.error("Cannot fetch product", error);
      }
    };
    fetchProduct(id);
  }, [id]);
  return (
    <div className="single-product_page outer-padding flex-col">
      <section className="flex-row single-product_page-section">
        <section className="single-product_page-image">
          <ImageSlider images={product?.image_urls} />
        </section>
        <section className="single-product_info flex-col">
          <h2>{product?.name}</h2>
          <p>432 in stock</p>
          <p>{product?.long_desc}</p>
          <h2>
            {product?.currency}
            {product?.price}
          </h2>
          <section className="flex-row button-container">
            <Counter count={3} />
            <button className="primary-button">Add to Cart</button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default SingleProductPage;
