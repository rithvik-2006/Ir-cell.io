import Navbar from "./nav-bar/page";
import Navbar2 from "./nav-bar2/page";
import ImageCarousel from "./image-carousel/page";
import DirectorMessage from "./directors-message/page";
import IntroVid from "./intro-video/page";
import Footer from "./footer/page";

export default function Home() {
  return (<div className="home-body">
    <Navbar/>
    <Navbar2/>
    <ImageCarousel/>
    <DirectorMessage/>
    <IntroVid/>
    <Footer/>
    

    </div>
  );
}
