import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const Education = ({ language }: Props) => {
  const getEducationMainText = () => {
    let data = require(`../data/education-${language}.json`);

    interface Course {
        school: string,
        course: string,
        timePeriod: string,
        description?: string,
        certificate?: string
    } 
    return (
      <ul className="listStyleNone">
        {data.education.map((item: Course) => (
          <li key={data.education.indexOf(item)} className="mb-3">
            <h4 className="fw-bold">{item.school}</h4>
            <h5>{item.course} ({item.timePeriod})</h5>
            <p>{language === "english" ? "Course scope" : "Zakres kursu"}:<br />{item.description}</p>
            <a href={item.certificate} rel="noreferrer" target="_blank">{language === "english" ? "Certificate" : "Certyfikat"}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div id="education">
      <TextHolder
        headingValue={language === "english" ? "Education" : "Edukacja"}
        textboxValue={getEducationMainText()}
      />
    </div>
  );
};

export default Education;
