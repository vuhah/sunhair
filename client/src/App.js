import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blogs";
import Product from "./pages/products";
import ProductDetail from "./pages/productdetail";
import BlogDetail from "./pages/blogdetail";
import Dashboard from "./pages/dashboard";
import DashboardLogin from "./pages/dashboardLogin";
import HomePanel from "./layouts/homePanel";
import OrderList from "./layouts/orderlist";
import Store from "./layouts/store";
import Event from "./layouts/events";
import Orders from "./pages/order";
import Completed from "./pages/completed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:productID" element={<ProductDetail />}></Route>
      <Route path="/blog" element={<Blog />}></Route>

      <Route
        path="/blog/how-to-sleep-comfortably-with-hair-extensions"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/how-to-distinguish-body-wave-and-loose-wave-hair"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/the-difference-between-bone-straight-and-natural-straight-hair"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/tape-in-extensions-why-i-should-buy-them"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/how-to-choose-a-wig-for-a-cancer-patient"
        element={<BlogDetail />}
      ></Route>
      <Route path="blog/about-us" element={<BlogDetail />}></Route>
      <Route
        path="blog/which-are-viatmin-hair-growth-need"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/how-to-distinguish-human-hair-vs-synthetic-hair"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/9-tricks-for-healthier-fully-looking-hair"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/some-tips-about-hair-extensions"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/what-are-weft-hair-extensions-anyway"
        element={<BlogDetail />}
      ></Route>

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<HomePanel />}></Route>
        <Route path="store" element={<Store />}></Route>
        <Route path="orderlist" element={<OrderList />}></Route>
        <Route path="event" element={<Event />}></Route>
      </Route>
      <Route path="/dashboard/login" element={<DashboardLogin />}></Route>
      <Route path="/order" element={<Orders />}></Route>
      <Route path="/ordercompleted" element={<Completed />}></Route>
      <Route path="*" element={<h1>No match</h1>}></Route>
    </Routes>
  );
}

export default App;
