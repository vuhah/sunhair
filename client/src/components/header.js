import { BrandRemoveBg, ContactIcon } from "../images/common/index.js";
import { NavLink } from "react-router-dom";

export default function Header({ theme }) {
  const backgroundColor = theme === "dark" ? "transparent" : "#ffffff";
  const textColor = theme === "dark" ? "#fff" : "#000";
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light header position-absolute top-0 start-0 end-0"
      style={{ background: backgroundColor }}
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
              <NavLink className="nav-link" to="/" style={{color:textColor}}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product" style={{color:textColor}} >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" style={{color:textColor}} >
                Blog
              </NavLink>
            </li>
          </ul>
          <div
            type="button"
            className="contact d-flex align-items-center justify-content-center"
          >
            <img src={ContactIcon} alt="" width="16px" className="me-3" />
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
