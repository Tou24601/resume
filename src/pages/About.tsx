import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const About = ({ language }: Props) => {
  const aboutMeText = () => {
    if (language === "english") {
      return (
        <div>
          <p>
            I&nbsp;am a&nbsp;front-end developer, editor, and&nbsp;professional
            looking for&nbsp;new, exciting projects and&nbsp;opportunities
            to&nbsp;expand my&nbsp;skills. I&nbsp;am programming in&nbsp;
            <span className="emphasis">React.js</span>,{" "}
            <span className="emphasis">JavaScript</span>,{" "}
            <span className="emphasis">TypeScript</span>,{" "}
            <span className="emphasis">HTML5</span>, and&nbsp;
            <span className="emphasis">CSS</span>. Currently learning{" "}
            <span className="emphasis">Angular</span>. In&nbsp;most of&nbsp;my
            projects I&nbsp;have been using{" "}
            <span className="emphasis">Bootstrap</span>. I&nbsp;am experienced
            in&nbsp;working with&nbsp;macOS and&nbsp;Microsoft Windows, Visual
            Studio Code, Atom, monday.com, Adobe InDesign, and Microsoft Office.
          </p>
          <p>
            Six&nbsp;years of&nbsp;experience in&nbsp;media has taught me how
            to&nbsp;give my best even under time pressure and&nbsp;how
            to&nbsp;cooperate with&nbsp;a&nbsp;larger team.
          </p>
          <p>
            Thank you for&nbsp;devoting your time to&nbsp;look into
            my&nbsp;portfolio!
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Jako junior front-end developer chętnię uczestniczę w&nbsp;ciekawych
            projektach i&nbsp;odkrywam nowe technologie. Programuję w&nbsp;
            <span className="emphasis">JavaScript</span>,{" "}
            <span className="emphasis">TypeScript</span>,{" "}
            <span className="emphasis">HTML5</span> i&nbsp;
            <span className="emphasis">CSS</span>. Znam{" "}
            <span className="emphasis">React.js</span>, poznaję{" "}
            <span className="emphasis">Angular</span>. Przy większości swoich
            projektów korzystałam z&nbsp;
            <span className="emphasis">Bootstrapa</span>. Dzięki ponad
            sześcioletniemu doświadczeniu w&nbsp;mediach zdobyłam umiejętność
            działania pod presją czasu, w&nbsp;szybko zmieniających się
            okolicznościach oraz współpracy z&nbsp;dużym zespołem.
          </p>
          <p>
            Od trzech lat pracuję zdalnie, więc mam samodyscyplinę
            i&nbsp;połączenie internetowe niezbędne do wykonywania swoich
            obowiązków z&nbsp;domu. Wcześniej przez cztery lata zdobywałam
            doświadczenie w&nbsp;biurze; chętnie połączę obie te formy.
          </p>
          <p>Zapraszam do zapoznania się z&nbsp;moim portfolio!</p>
        </div>
      );
    }
  };
  return (
    <div id="about">
      <TextHolder
        headingValue={language === "english" ? "About me" : "O mnie"}
        textboxValue={aboutMeText()}
      />
    </div>
  );
};

export default About;
