import NavBarMobile from "./NavBarMobile";
import NavBar from "./NavBar";
import LangToggle from "./LangToggle";

interface Props {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ language, setLanguage }: Props) => {
  return (
    <header className="header darkerBackground">
      <div className="d-flex flex-row justify-content-between">
      <NavBar language={language} />
        <NavBarMobile language={language} />
        <LangToggle language={language} setLanguage={setLanguage} />
      </div>
    </header>
  );
};

export default Header;
