import { useEffect, useRef, useState } from "react";
import { DownArrow } from "../images/common";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { setCurrentProductOrderly } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const SORT = ["BEST SELLING", "FROM A TO Z", "FROM Z TO A"];

function sortProduct(products, sortStyle) {
  switch (sortStyle) {
    case "BEST SELLING":
      return products;
    case "FROM A TO Z":
      const arrarForSort1 = [...products];
      arrarForSort1.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return arrarForSort1;
    case "FROM Z TO A":
      const arrarForSort2 = [...products];
      arrarForSort2.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      return arrarForSort2;
    default:
      return products;
  }
}

export default function DropdownSortOrderly() {
  const [dropStatus, setDropStatus] = useState(false);
  const [orderly, setOrderly] = useState(SORT[0]);

  const dispatch = useDispatch();
  const initialProducts = useSelector((state) => state.product.currentProducts);

  const wrapperRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropStatus(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const SORTDEFAULT = (orderly) => (
    <div
      className="default d-flex align-items-center justify-content-between pb-1"
      onClick={(e) => setDropStatus((prev) => !prev)}
    >
      <div className="d-inline">
        <p className="d-inline">SORT: </p>
        <p className="d-inline">{orderly}</p>
      </div>
      <img
        src={DownArrow}
        alt=""
        className={dropStatus ? "downicon downicon-show" : "downicon"}
      />
    </div>
  );

  function handleChooseSort(e, sort) {
    e.preventDefault();
    setOrderly(sort);
    setDropStatus(false);
    dispatch(
      setCurrentProductOrderly({ products: sortProduct(initialProducts, sort) })
    );
  }

  return (
    <div className="sort-product" ref={wrapperRef}>
      {SORTDEFAULT(orderly)}
      {dropStatus ? (
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          className="dropdown mt-2"
        >
          {SORT.map((sort, index) => (
            <div
              key={index}
              className="mb-2 mt-1"
              onClick={(e) => handleChooseSort(e, sort)}
            >
              <p className="d-inline ps-5">{sort}</p>
            </div>
          ))}
        </AnimationOnScroll>
      ) : null}
    </div>
  );
}
