import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const Experience = ({ language }: Props) => {
  const getExperienceMainText = () => {
    let data = require(`../data/experience-${language}.json`);

    interface Job {
        company: string,
        timePeriod: string,
        jobTitle: string,
        description: string
    } 
    return (
      <ul>
        {data.experience.map((item: Job) => (
          <li key={data.experience.indexOf(item)} className="pb-3">
            <h4 className="fw-bold">{item.company}</h4>
            <h5>{item.jobTitle} ({item.timePeriod})</h5>
            <p>{language === "english" ? "Job responsibilities" : "Obowiązki"}:<br />{item.description}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div id="experience">
      <TextHolder
        headingValue={language === "english" ? "Experience" : "Doświadczenie"}
        textboxValue={getExperienceMainText()}
      />
    </div>
  );
};

export default Experience;
