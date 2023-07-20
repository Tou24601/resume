import NavBar from './NavBar';
import LangToggle from './LangToggle';

interface Props {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>
        }

const Header = ({ language, setLanguage }: Props) => {
    return <header className="header">
        <div className='container d-flex flex-row justify-content-between'>
        <NavBar language={language} />
        <LangToggle language={language} setLanguage={setLanguage} />
        </div></header>
}

export default Header