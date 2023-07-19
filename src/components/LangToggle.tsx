interface Props {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>
      }

const LangToggle = ({ language, setLanguage }: Props) => {
  const switchLang = (e: any) => {
    document.getElementById(language)?.classList.replace("bold", "light")
    document.getElementById(e.target.id)?.classList.replace("light", "bold")
    setLanguage(e.target.id);
  };

  return (
    <p id="langToggle">
      <span id="polish" className="light pointer" onClick={(e) => switchLang(e)}>
        POL
      </span>
      /
      <span id="english" className="bold pointer" onClick={(e) => switchLang(e)}>
        ENG
      </span>
    </p>
  );
};

export default LangToggle;
