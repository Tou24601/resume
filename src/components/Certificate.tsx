interface Props {
  path: string;
  name: string;
  school: string;
}

const Certificate = ({ path, school, name }: Props) => {
  return (
    <a href={path} className="text-reset" target="_blank" rel="noreferrer">
      <span className="fw-bold text-decoration-none">{school}</span>
      <br />
      {name}
    </a>
  );
};

export default Certificate;
