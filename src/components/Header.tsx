import LangToggle from './LangToggle';

interface Props {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>
        }

const Header = ({ language, setLanguage }: Props) => {
    return <div className="header d-flex justify-content-between">
        <></>
        <LangToggle language={language} setLanguage={setLanguage} />
    </div>
}

export default Header