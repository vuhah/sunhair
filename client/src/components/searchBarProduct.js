import { SearchIcon } from "../images/common";
import { useState } from "react";
import { useSelector } from "react-redux";
import React, { useRef, useEffect } from "react";

const ProductResult = ({ product }) => {
  return (
    <div className="product-result ms-1 mt-1 pt-2 ps-4 pb-1  pb-3">
      <div className="d-flex align-items-center">
        <img src={product.images} alt="" className="image me-1" />
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
  const initialProducts = useSelector(state => state.product.initialProducts);
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
