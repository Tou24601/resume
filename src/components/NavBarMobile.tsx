import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />

interface Props {
    language: string;
  }

  interface MenuItem {
    name: string,
    path: string,
  }
  
  const NavBarMobile = ({ language }: Props) => {
    let data = require(`../data/nav-${language}.json`);
    console.log(data)
    return (
<div className="dropdown d-lg-none">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
  </button>
  <ul className="dropdown-menu">
    {data.menu.map((item: MenuItem) => {
        return    <li key={data.menu.indexOf(item)}>
        <a href={item.path} className="text-reset text-decoration-none dropdown-item">
          {item.name}
        </a>
      </li>
    })}
         
        </ul>
</div>

    );
  };
  
  export default NavBarMobile;
  