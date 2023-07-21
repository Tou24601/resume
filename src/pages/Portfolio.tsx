import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const Portfolio = ({ language }: Props) => {
  /* const getPortfolioData = fetch(`../data/projects-${language}.json`)
    .then((resp) => resp.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
        /*= fetch(url)
  .then((resp) => resp.json())
  .catch((err) => console.log(err));*/

  //render text
  const getPortfolioMainText = () => {
    let data = require(`../data/projects-${language}.json`);
    console.log(data.projects);
    return (
      <ol>
        {data.projects.map((item: any) => (
          <li key={data.projects.indexOf(item)} className="mb-1">
            <span className="">{item.name} ({item.language})</span>
            /
            <a href={item.gitHub} className="text-reset text-decoration-none fw-bold">GitHub</a>/ 
            <a href={item.preview} className="text-reset text-decoration-none  fw-bold">{language === "english" ? "PreView" : "Podgląd"}</a>
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
