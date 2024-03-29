import AddProductPanel from "../components/addProduct";
import EditProductPanel from "../components/editProduct";
import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosConfig";


export default function Store() {
  const [products, setProducts] = useState([]);
  const [triggerAddNerItem, setTriggerAddNewItem] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axiosInstance({
          url:"product/getProducts/",
          method:"GET"
        })
        const products = res.data;
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, [triggerAddNerItem]);

  return (
    <div className="store ps-3">
      <h1>STORE</h1>
      <div className="container mt-3 mb-3">
        <div className="row header-store pb-3 mb-1">
          <div className="col-1">NAME</div>
          <div className="col-1">CATEGORY</div>
          <div className="col-1">AVAILABLE</div>
          <div className="col-2">INFORMATION</div>
          <div className="col-2">DEFINITION</div>
          <div className="col-2">CHARACTERISTICS</div>
          <div className="col-2">INSTRUCTION MANUAL</div>
          <div className="col-1"></div>
        </div>
        <div className="productDetail container">
          {products.map((product, index) => (
            <div key={index} className="row mt-3 pt-1 pb-1">
              <div className="col-1">{product.name}</div>
              <div className="col-1">{product.category}</div>
              <div className="col-1">
                {product.available ? "true" : "false"}
              </div>
              <div className="col-2">{product.information}</div>
              <div className="col-2">{product.definition}</div>
              <div className="col-2">{product.characteristics}</div>
              <div className="col-2">{product.instructionManual}</div>
              <div className="col-1">
                <EditProductPanel
                  product={product}
                  trigger={setTriggerAddNewItem}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddProductPanel addTrigger={setTriggerAddNewItem} />
    </div>
  );
}
