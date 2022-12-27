import { ShoppingCart } from "../images/common";
import { useSelector } from "react-redux";

export function CartIcon() {
  const numofProductAdded = useSelector((state) => state.cart.productsadded);
  console.log(numofProductAdded);
  return (
    <div className="cart-icon">
      <img src={ShoppingCart} alt="" className="icon" />
      <div className="quantity text-center">{numofProductAdded.length}</div>
    </div>
  );
}
