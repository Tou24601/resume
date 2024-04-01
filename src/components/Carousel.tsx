import Certificate from "./Certificate";
//import { Document, Page } from "react-pdf";

//pngs
import HTML_english_PNG from "../assets/HTML_CSS-english.png";
import HTML_polish_PNG from "../assets/HTML_CSS-polish.png";
import JS_english_PNG from "../assets/JavaScript-english.png";
import JS_polish_PNG from "../assets/JavaScript-polish.png";
import InternetoweRewolucje_PNG from "../assets/InternetoweRewolucje.png";
import WritingInTheScience_PNG from "../assets/WritingInTheScience.png";
import UWDiploma from "../assets/copywriter.png";

//pdfs
import HTML_english from "../documents/Certificate 2023_1_32 - Joanna Kołakowska.pdf";
import HTML_polish from "../documents/Certyfikat 2023_1_32 - Joanna Kołakowska.pdf";
import JS_english from "../documents/Certificate 2023_4_54 - Joanna Kołakowska.pdf";
import JS_polish from "../documents/Certyfikat 2023_4_54 - Joanna Kołakowska.pdf";
import InternetoweRewolucje from "../documents/Certyfikat Internetowych Rewolucji.pdf";
import WritingInTheScience from "../documents/Certyfikat Writing in the Sciences.pdf";

import { useState } from "react";

const Carousel = () => {
  const [isActive, setIsActive] = useState(false);

  const handlePreviewClick = () => {
    console.log("hello");
  };
  return (
    <div className="col-4 carouselStyling ">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner p-5 ">
          <div className="carousel-item carouselStyling active">
            <a
              href={JS_english}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={JS_english_PNG}
                className="d-block w-100"
                alt="Java Script i React - certyfikat"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling">
            <a
              href={HTML_english}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={HTML_english_PNG}
                className="d-block w-100"
                alt="HTML i CSS - certyfikat"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling smallerCertificate">
            <a
              href={InternetoweRewolucje}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={InternetoweRewolucje_PNG}
                className="d-block w-100"
                alt="SEO - certyfikat"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling smallerCertificate">
            <a
              href={WritingInTheScience}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WritingInTheScience_PNG}
                className="d-block w-100"
                alt="English C1 - certificate"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling smallerCertificate">
            <img
              src={UWDiploma}
              className="d-block w-100"
              alt="Filologia Polska - dyplom"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
