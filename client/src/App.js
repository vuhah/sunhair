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
import BlogDetail1 from "./pages/blogdetail1";
import BlogDetail5 from "./pages/blogdetail5";
import BlogDetail6 from "./pages/blogdetail6";
import BlogDetail7 from "./pages/blogdetail7";
import BlogDetail9 from "./pages/blogdetail9";
import BlogDetail8 from "./pages/blogdetail8";
import BlogDetail3 from "./pages/blogdetail3";
import BlogDetail4 from "./pages/blogdetail4";
import BlogDetail2 from "./pages/blogdetail2";
import BlogDetail10 from "./pages/blogdetail10"
import AboutusPage from "./pages/aboutus";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:productID" element={<ProductDetail />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/about-us" element={<AboutusPage/>}></Route>
      <Route
        path="/blog/how-to-sleep-comfortably-with-hair-extensions"
        element={<BlogDetail />}
      ></Route>
      <Route
        path="blog/how-to-distinguish-body-wave-and-loose-wave-hair"
        element={<BlogDetail1 />}
      ></Route>
      <Route
        path="blog/the-difference-between-bone-straight-and-natural-straight-hair"
        element={<BlogDetail2 />}
      ></Route>
      <Route
        path="blog/tape-in-extensions-why-i-should-buy-them"
        element={<BlogDetail3 />}
      ></Route>
      <Route
        path="blog/how-to-choose-a-wig-for-a-cancer-patient"
        element={<BlogDetail4 />}
      ></Route>
      <Route path="blog/about-us" element={<BlogDetail5 />}></Route>
      <Route
        path="blog/which-are-viatmin-hair-growth-need"
        element={<BlogDetail6 />}
      ></Route>
      <Route
        path="blog/how-to-distinguish-human-hair-vs-synthetic-hair"
        element={<BlogDetail7 />}
      ></Route>
      <Route
        path="blog/9-tricks-for-healthier-fully-looking-hair"
        element={<BlogDetail8 />}
      ></Route>
      <Route
        path="blog/some-tips-about-hair-extensions"
        element={<BlogDetail9 />}
      ></Route>
      <Route
        path="blog/what-are-weft-hair-extensions-anyway"
        element={<BlogDetail10 />}
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
