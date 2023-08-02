interface Props {
  path: string;
  name: string;
  school: string;
}

const Certificate = ({ path, school, name }: Props) => {
  return (
    <p className="certificate">
      <span className="fw-bold schoolName">{school}</span>
      <a href={path} className="text-reset" target="_blank" rel="noreferrer">
        <br />
        {name}
      </a>
    </p>
  );
};

export default Certificate;
