import { ShoppingCart } from "../images/common";
import { useSelector } from "react-redux";

export function CartIcon() {
  const productsadded = useSelector((state) => state.cart.productsadded);
  const numofProductAdded = productsadded.length
  return (
    <div className="cart-icon">
      <img src={ShoppingCart} alt="" className="icon" />
      <div className="quantity text-center">
        <p>{numofProductAdded}</p>
      </div>
    </div>
  );
}
