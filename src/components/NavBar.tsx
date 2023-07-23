interface Props {
  language: string;
}

interface MenuItem {
  name: string;
  path: string;
  always: boolean;
}

const NavBar = ({ language }: Props) => {
  let data = require(`../data/nav-${language}.json`);

  return (
    <nav className="nav large-nav">
      <ul className="d-flex flex-row gap-3">
        {data.menu.map((item: MenuItem) => {
          if (!item.always) {
            return               <li key={data.menu.indexOf(item)}>
            <a href={item.path} className="text-reset text-decoration-none d-lg-none">
              {item.name}
            </a>
          </li>;
          } else {
            return (
              <li key={data.menu.indexOf(item)} className="pointer">
                <a href={item.path} className="text-reset text-decoration-none">
                  {item.name}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
