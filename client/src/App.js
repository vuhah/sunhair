import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blogs";
import Product from "./pages/products";
import ProductDetail from "./pages/productdetail";
import BlogDetail from "./pages/blogdetail";
import Dashboard from "./pages/dashboard";
import DashboardLogin from "./pages/dashboardLogin";

import HomePanel from "./layouts/homePanel";
import CompanyInformation from "./layouts/companyInfo";
import Store from "./layouts/store";
import Event from "./layouts/events";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:productID" element={<ProductDetail />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="blog/:blogID" element={<BlogDetail />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<HomePanel />}></Route>
        <Route path="store" element={<Store />}></Route>
        <Route
          path="companyinformation"
          element={<CompanyInformation />}
        ></Route>
        <Route path="event" element={<Event />}></Route>
      </Route>
      <Route path="/dashboard/login" element={<DashboardLogin />}></Route>
      <Route path="*" element={<h1>No match</h1>}></Route>
    </Routes>
  );
}

export default App;
