import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const Publications = ({ language }: Props) => {
  const getPublicationsMainText = () => {
    let data = require(`../data/publications-${language}.json`);

    interface Publication {
        title: string,
        publishingCompany: string,
        year: string | number,
        city: string,
        authors: string
    } 
    return (
      <ul className="listStyleNone">
        {data.publications.map((item: Publication) => (
          <li key={data.publications.indexOf(item)}>
            <h4 className="fw-bold">{item.title}</h4>
            <p>{item.authors}, {item.publishingCompany}, {item.city}&nbsp;{item.year}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div id="publications">
      <TextHolder
        headingValue={language === "english" ? "Publications" : "Publikacje"}
        textboxValue={getPublicationsMainText()}
      />
    </div>
  );
};

export default Publications;
