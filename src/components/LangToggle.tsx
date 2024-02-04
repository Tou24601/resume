interface Props {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>
      }

const LangToggle = ({ language, setLanguage }: Props) => {
  const switchLang = (e: any) => {
    document.getElementById(language)?.classList.replace("fw-bolder", "fw-normal")
    document.getElementById(e.target.id)?.classList.replace("fw-normal", "fw-bolder")
    setLanguage(e.target.id);
  };

  return (
    <p id="langToggle" className="pe-5">
      <span id="polish" className="fw-normal pointer" onClick={(e) => switchLang(e)}>
        POL
      </span>
      /
      <span id="english" className="fw-bolder pointer" onClick={(e) => switchLang(e)}>
        ENG
      </span>
    </p>
  );
};

export default LangToggle;
