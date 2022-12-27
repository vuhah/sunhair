import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import TopEvent from "../components/topEvent";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitialProducts,
  newCategory,
  returnRootPath,
} from "../redux/productPathSlice";
import CardProps from "../components/card";
import RefTab from "../components/refTab";
import SearchBarProduct from "../components/searchBarProduct";
import { CartIcon } from "../components/cart";

const categories = [
  {
    nameCate: "ALL PRODUCTS",
    codepath: "all",
  },
  {
    nameCate: "WEFT HAIR",
    codepath: "weft",
  },
  {
    nameCate: "BULK HAIR",
    codepath: "bulk",
  },
  {
    nameCate: "KERATIN HAIR",
    codepath: "keratin",
  },
  {
    nameCate: "CLOSURE",
    codepath: "closure",
  },
  {
    nameCate: "CLIP IN",
    codepath: "clip",
  },
  {
    nameCate: "FRONTAL",
    codepath: "frontal",
  },
  {
    nameCate: "WIGS HAIR",
    codepath: "wigs",
  },
  {
    nameCate: "TAPE HAIR",
    codepath: "tape",
  },
  {
    nameCate: "RAW HAIR",
    codepath: "raw",
  },
];

export default function Product() {
  const currentPath = useSelector((state) => state.productPath.path);
  const currentProducts = useSelector(
    (state) => state.productPath.currentProducts
  );
  const [currentCheckBoxCategory, setCurrentCheckBoxCategory] =
    useState("ALL PRODUCTS");
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          `https://sunhair-x98n.vercel.app/api/product/getProductsSelected`
        );
        const productInfor = [];

        for (const product of res.data) {
          // const base64 = arrayBufferToBase64(product.image.data);
          productInfor.push({
            id: product.id,
            name: product.name,
            images: {
              filename: product.images.filename.name,
              data: "data:image/png;base64," + product.images.data,
            },
            category: product.category,
            available: product.available,
          });
        }
        dispatch(setInitialProducts({ products: productInfor }));
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
              <CartIcon/>
            </div>
          </div>
        </div>

        <div className="row category-product">
          <div className="col-3 categories">
            <p className="title mb-5">CATEGORIES</p>
            <form>
              {categories.map((category, index) => (
                <div key={index} className="mt-4">
                  <label>
                    <input
                      className="option-input radio"
                      type="radio"
                      name="category"
                      id={category.nameCate}
                      value={category.nameCate}
                      checked={currentCheckBoxCategory === category.nameCate}
                      onChange={(e) =>
                        handleChooseCategory(
                          e,
                          category.nameCate,
                          category.codepath
                        )
                      }
                    />
                    {category.nameCate}
                  </label>
                </div>
              ))}
            </form>
          </div>

          <div className="col-9">
            <div className="d-block container-fluid">
              <div className="row">
                <div className="col-12">
                  <p className="float-end">SORT</p>
                </div>
              </div>
              <div className="row justify-content-between products mt-5">
                {currentProducts.map((ele, index) => (
                  <div key={index} className="col-4">
                    <CardProps
                      name={ele.name}
                      category={ele.category}
                      src={ele.images.data}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RefTab />
    </>
  );
}
