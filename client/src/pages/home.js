import Thumbnail from "../layouts/thumbnail";
import AboutUs from "../layouts/aboutus";
import ImageTeaser from "../layouts/imageTeaser";
import ReasonChoose from "../layouts/reasonchoose";
import OurProducts from "../layouts/ourproduct";
import Feedback from "../layouts/feedback";
import Footer from "../layouts/footer";
import Subcribe from "../layouts/subcribe";

export default function Home() {
  return (
    <div>
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
