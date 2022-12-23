import Thumbnail from "../layouts/thumbnail";
import AboutUs from "../layouts/aboutus";
import ImageTeaser from "../layouts/imageTeaser";
import ReasonChoose from "../layouts/reasonchoose";
import OurProducts from "../layouts/ourproduct";
import Feedback from "../layouts/feedback";
import Footer from "../components/footer";
import Subcribe from "../layouts/subcribe";
import RefTab from "../components/refTab";

export default function Home() {
  return (
    <div>
      <RefTab/>
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
