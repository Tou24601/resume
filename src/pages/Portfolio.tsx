import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const Portfolio = ({ language }: Props) => {
  const getPortfolioMainText = () => {
    let data = require(`../data/projects-${language}.json`);
    return (
      <ol>
        {data.projects.map((item: any) => (
          <li key={data.projects.indexOf(item)} className="mb-3">
              {item.name} ({item.language})
            <br />
            <a
              href={item.gitHub}
              className="text-reset fw-bold"
              target="blank"
            >
              GitHub
            </a>
            /&nbsp;
            <a
              href={item.preview}
              className="text-reset fw-bold" target="blank"
            >
              {language === "english" ? "PreView" : "Podgląd"}
            </a>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div id="portfolio">
      <TextHolder
        headingValue="Portfolio"
        textboxValue={getPortfolioMainText()}
      />
    </div>
  );
};

export default Portfolio;
