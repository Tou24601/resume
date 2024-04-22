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

interface Props {
  language: string;
}
//language === "english" ? HTML_english : HTML_polish
const Carousel = ({language}: Props) => {

  return (
    <div id="carouselExample" className="col-4 carousel slide">
      <div className="carousel slide">
        <div className="carousel-inner p-5 ">
          <div className="carousel-item carouselStyling active">
            <a
              href={language === "english" ? JS_english : JS_polish}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={language === "english" ? JS_english_PNG : JS_polish_PNG}
                className="d-block w-100 shadow-img"
                alt="Java Script i React - certyfikat"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling">
            <a
              href={language === "english" ? HTML_english : HTML_polish}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={language === "english" ? HTML_english_PNG : HTML_polish_PNG}
                className="d-block w-100 shadow-img"
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
                className="d-block w-100 shadow-img"
                alt="SEO - certyfikat"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling smallerCertificate ">
            <a
              href={WritingInTheScience}
              className="text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WritingInTheScience_PNG}
                className="d-block w-100 shadow-img"
                alt="English C1 - certificate"
              />
            </a>
          </div>
          <div className="carousel-item carouselStyling smallerCertificate">
            <img
              src={UWDiploma}
              className="d-block w-100 shadow-img"
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
