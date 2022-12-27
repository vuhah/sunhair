import Thumbnail from "../layouts/thumbnail";
import AboutUs from "../layouts/aboutus";
import ImageTeaser from "../layouts/imageTeaser";
import ReasonChoose from "../layouts/reasonchoose";
import OurProducts from "../layouts/ourproduct";
import Feedback from "../layouts/feedback";
import Footer from "../components/footer";
import Subcribe from "../layouts/subcribe";
import RefTab from "../components/refTab";
import Header from "../components/header";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [theme, setTheme] = useState("dark")
  
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 0 ){
  //       setTheme('light')
  //     }
  //     else {
  //       setTheme('dark')
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div>
      <RefTab />
      <Header theme={"dark"} />
      <Thumbnail />
      <AboutUs />
      <ImageTeaser />
      <ReasonChoose />
      <OurProducts />
      <Feedback />
      <Subcribe />
      <Footer />
    </div>
  );
}
