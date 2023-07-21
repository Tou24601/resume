import { disconnect } from "process";
import IMG from "../assets/frontend.jpg";

interface Props {
  language: string;
}

const ContactHolder = ({ language }: Props) => {
  return (
    <div className="container position-relative">
    <div className={window.innerWidth < 992 ? "col-12 position-relative" : "contactHolder"}>
      <img className="image" src={IMG} alt="Junior Front-End Dev" />
      <h4 className="fw-bold my-3">Joanna Kołakowska</h4>
      <ul className="contact-list">
        <li>
          <a
            href="tel:+48727846517"
            className="text-reset text-decoration-none"
          >
            +48 727 846 517
          </a>
        </li>
        <li>
          <a
            href="mailto:kolakowska.joanna.jk@gmail.com"
            className="text-reset text-decoration-none"
          >
            kolakowska.joanna.jk@gmail.com
          </a>
        </li>
        <li>
          {language === "english" ? "Warsaw/remotly" : "Warszawa/praca zdalna"}
        </li>
        <li>
          <a
            href="https://github.com/Tou24601"
            target="blank"
            className="text-reset text-decoration-none"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joanna-ko%C5%82akowska-b80628158/"
            target="blank"
            className="text-reset text-decoration-none"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default ContactHolder;
