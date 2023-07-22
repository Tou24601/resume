import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const Home = ({ language }: Props) => {
  const aboutMeText = () => {
    if (language === "english") {
      return (
        <div>
          <p>
            I am a front-end developer, editor, and writer currently living in
            Warsaw, Poland. My interests range from programming to literature (I
            am also a massive fan of "Doctor Who" and musical theatre).
          </p>
          <p>
            I am programming in JavaScript (this includes experience with
            React.js), TypeScript, HTML and CSS. Currently learning Angular.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Jako junior front-end developer chciałabym rozwijać znajomość JS
            oraz innych języków programowania. Dzięki ponad 6-letniemu
            doświadczeniu w pracy w mediach zdobyłam umiejętność działania pod
            presją czasu, w szybko zmieniających się okolicznościach oraz
            współpracy z dużym zespołem. Przez ostatnie trzy lata pracowałam
            zdalnie, więc mam samodyscyplinę i połączenie internetowe niezbędne
            do wykonywania swoich obowiązków z domu. Mam też doświadczenie w
            pracy w biurze; chętnie połączę obie formy. Świadectwem mojej
            rzetelności jest wygrana w konkursie na pracę magisterską oraz
            publikacja w serii „Polonistyka Użyteczna”.
          </p>
          <p>
            Programuję w <b>JavaScript</b>, <b>TypeScript</b>, <b>HTML5</b> i{" "}
            <b>CSS</b>. Znam <b>React.js</b>, poznaję <b>Angular</b>. Przy
            większości swoich projektów korzystałam z <b>Bootstrapa</b>.
            Zapraszam do zapoznania się z moim portfolio!
          </p>
        </div>
      );
    }
  };
  return (
    <div id="about">
    <TextHolder
        headingValue={language === "english" ? "About me" : "O mnie"}
        textboxValue={aboutMeText()}
      /></div>
  );
};

export default Home;
