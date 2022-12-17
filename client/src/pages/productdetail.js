import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  return (
    <div>
      <h1>ProductDetail: {params.productID}</h1>
    </div>
  );
}
