import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  language: string;
}

interface MenuItem {
  name: string;
  path: string;
}

const NavBarMobile = ({ language }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  let data = require(`../data/nav-${language}.json`);

  const handleClick = (): void => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="d-lg-none">
     
        <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} onClick={() => handleClick()} className="ps-5" />

      <div className={isVisible ? "darkerBackground px-3 py-1" : "d-none"} onClick={() => handleClick()}><ul className="">
    {
    data.menu.map((item: MenuItem) => {
           return    <li key={data.menu.indexOf(item)}>
        <a href={item.path} className="text-reset text-decoration-none">
          {item.name}
        </a>
      </li>
    })}
         
        </ul></div>
    </div>
  );
};

export default NavBarMobile;
