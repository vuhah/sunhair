import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import TopEvent from "../components/topEvent";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitialProducts,
  returnRootPath,
  newCategory,
} from "../redux/productPathSlice";

import CardProps from "../components/card";

const categories = [
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

function arrayBufferToBase64(Arraybuffer) {
  let binary = "";
  const bytes = new Uint8Array(Arraybuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const file = window.btoa(binary);
  return file;
}

export default function Product() {
  const currentPath = useSelector((state) => state.productPath.path);
  const currentProducts = useSelector(
    (state) => state.productPath.currentProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          `https://sunhair-x98n-87w7gk3ar-vuhah.vercel.app/api/product/getProducts`
        );
        const productInfor = [];

        for (const product of res.data) {
          const base64 = arrayBufferToBase64(product.images[0].data.data);
          productInfor.push({
            id: product.id,
            name: product.name,
            images: {
              filename: product.images[0].name,
              data: "data:image/png;base64," + base64,
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
    e.preventDefault();
    dispatch(newCategory({ path: nameCate, codepath: codepath }));
  }

  return (
    <>
      <TopEvent />
      <div className="product container">
        <Header className="header" />
        <div className="row justify-content-around path-cart">
          <div className="col-9 path">{currentPath}</div>
          <div className="col-3 cartIcon">
            <p className="float-end">CART</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-3 categories">
            <p className="title">CATEGORIES</p>
            {categories.map((category, index) => (
              <button
                className="category mt-5"
                key={index}
                onClick={(e) =>
                  handleChooseCategory(e, category.nameCate, category.codepath)
                }
              >
                {category.nameCate}
              </button>
            ))}
          </div>
          <div className="col-9">
            <div className="container-fluid m-0">
              <div className="row justify-content-between products">
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
    </>
  );
}
