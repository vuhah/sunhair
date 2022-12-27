import { SearchIcon } from "../images/common";
import { useState } from "react";
import { useSelector } from "react-redux";
import React, { useRef, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProductResult = ({ product }) => {
  return (
    <div className="product-result mt-3 ms-3 mb-1 pb-3">
      <div className="d-flex align-items-center">
        <img src={product.images.data} alt="" className="image" />
        <div className="name-available ms-4">
          <div className="name">{product.name}</div>
          <div className="available mt-2">
            {product.available ? "Available" : "Unavailable"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SearchBarProduct() {
  const [typingSearch, setTypingSearch] = useState("");
  const initialProducts = useSelector(
    (state) => state.productPath.initialProducts
  );
  const [closeResult, setCloseResult] = useState(true);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setCloseResult(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function handleTypingSearch(e) {
    e.preventDefault();
    if (e.target.value === "") {
      setCloseResult(true);
    } else {
      setCloseResult(false);
    }
    setTypingSearch(e.target.value);
  }
  const searchResult = initialProducts.filter((product) => {
    return product.name.toLowerCase().includes(typingSearch.toLowerCase());
  });

  console.log(typingSearch, searchResult);

  return (
    <div className="position-relative searchcomponent" ref={wrapperRef}>
      <div className="searchBarProduct d-flex align-items-center">
        <img src={SearchIcon} alt="" className="icon ms-3" />
        <input
          type="text"
          value={typingSearch}
          onChange={(e) => handleTypingSearch(e)}
          className="searchbar ms-3"
          placeholder="Find product ...."
        />
        <div className="search-button d-flex align-items-center">
          <button className="button ms-3 me-3">Search</button>
        </div>
      </div>
      {closeResult ? (
        <></>
      ) : (
        <div className="dropdown-result-search">
          {searchResult.map((product) => (
            <ProductResult product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
