import { useEffect, useState } from "react";
import Header from "../components/header";
import TopEvent from "../components/topEvent";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitialProducts,
  newCategory,
  returnRootPath,
} from "../redux/productSlice";
import CardProps from "../components/card";
import RefTab from "../components/refTab";
import SearchBarProduct from "../components/searchBarProduct";
import { CartIcon } from "../components/cart";
import categoryMap from "../constant/categoryCode";
import axiosInstance from "../config/axiosConfig";
import Footer from "../components/footer";
import DropdownSortOrderly from "../components/dropdownSortOrderly";
import { Link } from "react-router-dom";

export default function Product() {
  const currentPath = useSelector((state) => state.product.path);
  const currentProducts = useSelector((state) => state.product.currentProducts);
  const [currentCheckBoxCategory, setCurrentCheckBoxCategory] =
    useState("ALL PRODUCTS");
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axiosInstance({
          url: "product/getProductsSelected/",
          method: "GET",
        });
        dispatch(setInitialProducts({ products: res.data }));
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  function handleChooseCategory(e, nameCate, codepath) {
    setCurrentCheckBoxCategory(e.target.value);
    if (codepath !== "all") {
      dispatch(newCategory({ path: nameCate, codepath: codepath }));
    } else {
      dispatch(returnRootPath({}));
    }
    setCurrentCheckBoxCategory(e.target.value);
  }

  return (
    <>
      <TopEvent />
      <div className="product container">
        <Header className="header" />
        <div className="row justify-content-around align-items-center path-search-cart">
          <div className="col-3 path">{currentPath}</div>
          <div className="col-4 offset-1">
            <SearchBarProduct className="search" />
          </div>
          <div className="col-3 offset-1 cartIcon">
            <div className="float-end">
              <Link to="/order">
                <CartIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          <div className="col-3">
            <p className="title">CATEGORIES</p>
          </div>
          <div className="col-9">
            <div className="float-end">
              <DropdownSortOrderly className="float-end" />
            </div>
          </div>
        </div>

        <div className="row category-product">
          <div className="col-3 categories pt-1">
            <form>
              {Array.from(categoryMap).map((category, index) => (
                <div key={index} className="mb-4">
                  <label>
                    <input
                      className="option-input radio"
                      type="radio"
                      name="category"
                      id={category[1]}
                      value={category[1]}
                      checked={currentCheckBoxCategory === category[1]}
                      onChange={(e) =>
                        handleChooseCategory(e, category[1], category[0])
                      }
                    />
                    {category[1]}
                  </label>
                </div>
              ))}
            </form>
          </div>

          <div className="col-9">
            <div className="d-block container-fluid">
              <div className="row justify-content-between products">
                {currentProducts.map((ele, index) => (
                  <div key={index} className="col-4">
                    <CardProps
                      id={ele.id}
                      name={ele.name}
                      category={categoryMap.get(ele.category)}
                      src={ele.images}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RefTab />
      <Footer />
    </>
  );
}
