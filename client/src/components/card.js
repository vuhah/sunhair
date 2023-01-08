import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function CardProps({ id, name, category, src }) {
  const dispatch = useDispatch();

  function handleAddItems(e) {
    e.preventDefault();
    dispatch(
      addProduct({
        productID: id,
        weight: 100,
        thumbnail: src,
        name: name,
        category: category,
      })
    );
  }

  return (
    <div
      className="container-card mb-5"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="overlay">
        <div className="items"></div>
        <Link to={`/product/${id}`} className="items head" >
          <p>{name}</p>
          <hr />
        </Link>
        <div className="items price">
          {/* <p className="old">$699</p> */}
          <p className="new">{category}</p>
        </div>
        <div className="items cart">
          <i className="fa fa-shopping-cart"></i>
          <span onClick={(e) => handleAddItems(e)}>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
}

export default CardProps;
