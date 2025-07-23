import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useEffect, useState } from "react";
import closeMenuBtn from "../../assets/icons/down-arrow.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLsaScrollY] = useState(0);

  const navbarToggler = () => setIsActive(!isActive);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLsaScrollY(currentScroll);

      isActive ? setIsActive(false) : "";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => setIsActive(false);

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`}>
      <div className="logo">
        <span>House Of</span>
        <img src="/hox-logo.webp" alt="X logo" />
      </div>
      <nav className={isActive ? "active" : ""}>
        <NavLink
          className={`${(isActive) => (isActive ? "active" : "")}  nav-item`}
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={`${(isActive) => (isActive ? "active" : "")}  nav-item`}
          to={"/hox-launch"}
        >
          HOX Launch
        </NavLink>
        <NavLink
          className={`${(isActive) => (isActive ? "active" : "")}  nav-item`}
          to={"/become-a-partner"}
        >
          Become a Partner
        </NavLink>
        <NavLink
          className={`${(isActive) => (isActive ? "active" : "")}  nav-item`}
          to={"/contact"}
        >
          Contact
        </NavLink>

        <button onClick={closeMenu} className="close-menu-btn">
          <img src={closeMenuBtn} />
        </button>

        <NavLink className="login-btn">Login</NavLink>
      </nav>

      <button onClick={navbarToggler} className="open-menu-btn">
        {isActive ? "close" : "menu"}
      </button>
    </header>
  );
};

export default Navbar;
