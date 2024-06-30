import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about-me",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
];

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto px-4 lg:px-6">
        <div className="navbar-start">
          <Link to="/">
            <img src={logo} className="size-8" alt="Rifat Hassan" />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <GiHamburgerMenu className="text-[20px] text-white" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg mt-4 z-[10] w-52 p-2 shadow-lg shadow-gray-100">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
