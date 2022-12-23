import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
  const [productIntros, setProductIntros] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          "https://sunhair-1zp8epzjw-vuhah.vercel.app/api/product/getProducts"
        );
          console.log(res.data);
        setProductIntros(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>shdfhdf</h1>
      {productIntros.map((ele, index) => (
        <div key={index}>
          <img src={ele.img} alt="Red" />
          <h1>{ele._id}</h1>
          <h1>{ele.name}</h1>
          <h2>{ele.category}</h2>
        </div>
      ))}
    </div>
  );
}
