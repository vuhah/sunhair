import { BrandRemoveBg, ContactIcon } from "../images/common/index.js";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header1({ theme }) {
  const theme2 =
    theme === "dark"
      ? { backgroundColor: "transparent", textColor: "#fff" }
      : { backgroundColor: "transparent", textColor: "#000" };

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setFlag(false);
      } else {
        setFlag(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!flag) return <></>;
  else
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light header"
        style={{ background: theme2.backgroundColor }}
      >
        <div className="container">
          <NavLink className="navbar-brand me-0" href="/">
            <img src={BrandRemoveBg} alt="" width="120px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={{ color: theme2.textColor }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/product"
                  style={{ color: theme2.textColor }}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/blog"
                  style={{ color: theme2.textColor }}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <a
              href="https://wa.me/84912124125"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="contact d-flex align-items-center justify-content-center"
            >
              <img src={ContactIcon} alt="" width="16px" className="me-3" />
              <p>Contact us</p>
            </a>
          </div>
        </div>
      </nav>
    );
}

export function Header2({ theme }) {
  const theme2 = { backgroundColor: "#fff", textColor: "#000" };

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!flag) return <></>
  else return (
    <nav
      className="navbar navbar-expand-sm navbar-light header position-fixed top-0 start-0 end-0"
      style={{ background: theme2.backgroundColor }}
    >
      <div className="container">
        <NavLink className="navbar-brand me-0" href="/">
          <img src={BrandRemoveBg} alt="" width="120px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={{ color: theme2.textColor }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/product"
                style={{ color: theme2.textColor }}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                style={{ color: theme2.textColor }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <a
            href="https://wa.me/84912124125"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="contact d-flex align-items-center justify-content-center"
          >
            <img src={ContactIcon} alt="" width="16px" className="me-3" />
            <p>Contact us</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
