

interface Props {
  headingValue: string;
  textboxValue: any
      }

const TextHolder = ({ headingValue, textboxValue }: Props) => {

  return (
    <div className="textHolder col-12 col-lg-7">
      <h3 className="mb-4">{headingValue}</h3>
      <div>{textboxValue}</div>
    </div>
  );
};

export default TextHolder;
