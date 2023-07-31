import Certificate from "./Certificate";
import HTML_english from "../documents/Certificate 2023_1_32 - Joanna Kołakowska.pdf";
import HTML_polish from "../documents/Certyfikat 2023_1_32 - Joanna Kołakowska.pdf";
import JS_english from "../documents/Certificate 2023_4_54 - Joanna Kołakowska.pdf";
import JS_polish from "../documents/Certyfikat 2023_4_54 - Joanna Kołakowska.pdf";
import InternetoweRewolucje from "../documents/Certyfikat Internetowych Rewolucji.pdf";
import WritingInTheScience from "../documents/Certyfikat Writing in the Sciences.pdf";

interface Props {
  language: string;
}

const Certificates = ({ language }: Props) => {
  return <div className="ms-5">
    <h3 className="fw-bold pb-3">
      {language === "english" ? "Certificates" : "Certyfikaty"}
    </h3>
    <div className="d-flex flex-column flex-lg-row gap-5 text-start text-lg-center">
    <Certificate path={language === "english" ? HTML_english : HTML_polish} school="Future Collars" name="HTML/CSS" />
    <Certificate path={language === "english" ? JS_english : JS_polish} school="Future Collars" name="JAVASCRIPT & REACT" />
    <Certificate path={InternetoweRewolucje} school="Google" name="Internetowe Rewolucje" />
    <Certificate path={WritingInTheScience} school="Stanford Online" name="Writing in the Sciences" />
    </div>
  </div>;
};

export default Certificates;
