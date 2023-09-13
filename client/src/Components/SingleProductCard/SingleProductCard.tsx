import "./SingleProductCard.css";
import { useNavigate } from "react-router-dom";
// import productimage from "../../assets/stool.jpg";
import { Product } from "../../types";

interface SingleProductCardProps {
  product: Product;
}

const SingleProductCard: React.FC<SingleProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`${id}`);
  };
  return (
    <div
      className="single-product flex-col"
      id={product.id}
      key={product.id}
      onClick={() => handleClick(product.id)}
    >
      <img
        src={product.placeholder_image_url}
        alt={product.name}
        className="single-product_image"
      />
      <p className="single-product_category">{product.category}</p>
      <h3 className="single-product_title">{product.name}</h3>
      <p>{product.short_desc}</p>
      <h3>
        {product.currency}
        {product.price}
      </h3>
    </div>
  );
};

export default SingleProductCard;
