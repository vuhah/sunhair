import Thumbnail from "../layouts/thumbnail";
import AboutUs from "../layouts/aboutus";
import ImageTeaser from "../layouts/imageTeaser";
import ReasonChoose from "../layouts/reasonchoose";
import OurProducts from "../layouts/ourproduct";
import Feedback from "../layouts/feedback";
import Footer from "../components/footer";
import Subcribe from "../layouts/subcribe";
import RefTab from "../components/refTab";
import { Header2 } from "../components/header";
import Payment from "../layouts/payment";

export default function Home() {
  return (
    <div>
      <Header2 />
      <RefTab />
      <Thumbnail />
      <AboutUs />
      <ImageTeaser />
      <ReasonChoose />
      <OurProducts />
      <Feedback />
      <Payment/>
      <Subcribe />
      <Footer />
    </div>
  );
}
