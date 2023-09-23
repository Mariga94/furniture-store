import React from "react";
import "./SingleCartItem.css";
import { Product } from "../../types";
import { Counter } from "..";
import { AiOutlineDelete } from "react-icons/ai";
interface SingleCartItemProps {
  props: Product;
}
const SingleCartItem: React.FC<SingleCartItemProps> = (props) => {
  return (
    <tr
      id={props.id}
      className="cart-row flex-row justify-space_between align-center"
    >
      <td>
        <img src={props.placeholder_image_url} className="cart-image" />
      </td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>20</td>
      <td>800</td>
      <td>{<AiOutlineDelete className="react-icons" />}</td>
    </tr>
  );
};

export default SingleCartItem;
