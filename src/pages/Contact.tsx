import TextHolder from "../components/TextHolder";
import ContactHolder from "../components/ContactHolder";

interface Props {
  language: string;
}

const Contact = ({ language }: Props) => {
  

  return (
    <div id="contact" className="d-lg-none">
      <ContactHolder language="language" />
    </div>
  );
};

export default Contact;
