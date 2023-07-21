interface Props {
    language: string;
        }

const NavBar = ({language} : Props) => {

    return <nav className="nav">
        <ul className="d-flex flex-row gap-3 listStyleNone">
            <li><a href="#about" className="text-reset text-decoration-none">{(language === "english") ? "About me" : "O mnie"}</a></li>
            <li><a href="#portfolio" className="text-reset text-decoration-none">Portfolio</a></li>
            <li><a href="#education" className="text-reset text-decoration-none">{(language === "english") ? "Education" : "Edukacja"}</a></li>
            <li><a href="#experience" className="text-reset text-decoration-none">{(language === "english") ? "Experience" : "Doświadczenie"}</a></li>
            <li><a href="#publications" className="text-reset text-decoration-none">{(language === "english") ? "Publications" : "Publikacje"}</a></li>
            <li><a href="#contact" className="text-reset text-decoration-none">{(language === "english") ? "Contact" : "Kontakt"}</a></li>
        </ul>
    </nav>
}

export default NavBar