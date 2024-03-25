import Certificate from "./Certificate";
import { Document, Page } from "react-pdf";
import HTML_english from "../documents/Certificate 2023_1_32 - Joanna Kołakowska.pdf";
import HTML_polish from "../documents/Certyfikat 2023_1_32 - Joanna Kołakowska.pdf";
import JS_english from "../documents/Certificate 2023_4_54 - Joanna Kołakowska.pdf";
import JS_polish from "../documents/Certyfikat 2023_4_54 - Joanna Kołakowska.pdf";
import InternetoweRewolucje from "../documents/Certyfikat Internetowych Rewolucji.pdf";
import WritingInTheScience from "../documents/Certyfikat Writing in the Sciences.pdf";
import FrontEnd from "../assets/frontend.jpg"

const Carousel = () => {
  const handlePreviewClick = () => {
    console.log("hello");
  };
  return (
    <div className="col-6">
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={FrontEnd} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item active">
      <img src="https://dcf.wroclaw.pl/wp-content/uploads/ImageData-63.jpeg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Carousel;
