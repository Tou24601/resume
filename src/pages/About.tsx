import TextHolder from "../components/TextHolder";
import IMG from "../assets/frontend.jpg";

const About = () => {
  const aboutMeText = () => {
    if (language === "english") {
      return (
        <div>
          <p></p>
          <p></p>
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
            współpracy z dużym zespołem. Świadectwem mojej rzetelności jest
            wygrana w konkursie na pracę magisterską oraz publikacja w serii
            „Polonistyka Użyteczna”.
          </p>
          <p>Programuję w <b>JavaScript</b>, <b>TypeScript</b>, <b>HTML5</b> i <b>CSS</b>. Znam <b>React.js</b>, poznaję <b>Angular</b>. Przy większości swoich projektów korzystałam z <b>Bootstrapa</b>. Zapraszam do zapoznania się z moim portfolio!</p>
        </div>
      );
    }
  };
  return (
    <div>
      <TextHolder
        headingValue={language === "english" ? "About me" : "O mnie"}
        textboxValue={aboutMeText}
      />
      <div>
        <img src={IMG} alt="Junior Front-End Dev" />
        <ul></ul>
      </div>
    </div>
  );
};

export default About;
