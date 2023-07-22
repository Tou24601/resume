import IMG from "../assets/frontend.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Props {
  language: string;
}

const ContactHolder = ({ language }: Props) => {
  return (
    
      <div
        className="container contactHolder" id="contact"/*{
          window.innerWidth < 992
            ? "col-12 position-relative mt-5 text-center"
            : "contactHolder"
        }*/
      >
        <img className="image" src={IMG} alt="Junior Front-End Dev" />
        <h4 className="fw-bold my-3">Joanna Kołakowska</h4>
        <ul className="listStyleNone">
          <li>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />{" "}
            <a
              href="tel:+48727846517"
              className="text-reset text-decoration-none"
            >
              +48 727 846 517
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />{" "}
            <a
              href="mailto:kolakowska.joanna.jk@gmail.com"
              className="text-reset text-decoration-none"
            >
              kolakowska.joanna.jk@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff" }}
            />{" "}
            {language === "english"
              ? "Warsaw/ remotly"
              : "Warszawa/ praca zdalna"}
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />{" "}
            <a
              href="https://github.com/Tou24601"
              target="blank"
              className="text-reset"
            >
              GitHub
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />{" "}
            <a
              href="https://www.linkedin.com/in/joanna-ko%C5%82akowska-b80628158/"
              target="blank"
              className="text-reset"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

  );
};

export default ContactHolder;
