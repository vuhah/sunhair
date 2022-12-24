function CardProps({ name, category, src }) {
  return (
    <div
      className="container-card mb-5"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="overlay">
        <div className="items"></div>
        <div className="items head">
          <p>{name}</p>
          <hr />
        </div>
        <div className="items price">
          {/* <p className="old">$699</p> */}
          <p className="new">{category}</p>
        </div>
        <div className="items cart">
          <i className="fa fa-shopping-cart"></i>
          <span>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
}

export default CardProps;
