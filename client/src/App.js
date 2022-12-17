import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blogs";
import Product from "./pages/products";
import ProductDetail from "./pages/productdetail";
import BlogDetail from "./pages/blogdetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:productID" element={<ProductDetail />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="blog/:blogID" element={<BlogDetail />}></Route>
      <Route path="*" element={<h1>No match</h1>}></Route>
    </Routes>
  );
}

export default App;
