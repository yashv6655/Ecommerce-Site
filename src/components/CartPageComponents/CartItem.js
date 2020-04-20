import React from "react";
import {
  FaRegTrashAlt,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem,
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* Image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img
          src={image}
          width="100px"
          height="100px"
          className="img-fluid"
          alt={title}
        />
      </div>
      {/* End of Image */}
      {/* Title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      {/* End of Title */}
      {/* Price */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Price: $</span>
        {price}
      </div>
      {/* End of Price */}
      {/* Count Controls */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaArrowAltCircleUp
              className="text-primary cart-icon text-light"
              onClick={() => increment(id)}
            />
            <span className="text-title mx-3">{count}</span>
            <FaArrowAltCircleDown
              className="text-primary cart-icon text-light"
              onClick={() => decrement(id)}
            />
          </div>
        </div>
      </div>
      {/* End of Count Controls */}
      {/* Remove Icon */}
      <div className="col-10 mx-auto col-lg-2">
        <FaRegTrashAlt
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* End of Remove Icon */}
      {/* Item Total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item Total: ${total}</strong>
      </div>
      {/* End of Item Total */}
    </div>
  );
}
