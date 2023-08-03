import TextHolder from "../components/TextHolder";

interface Props {
  language: string;
}

const PriceList = ({language} : Props) => {
    <TextHolder headingValue={ language === "english" ? "Cennik" : "Offer"} textboxValue="lista" />
}

export default PriceList