import { FacebookIcon, IgIcon, WhatsappIcon } from "../images/common";
export default function RefTab() {
  return (
    <div className="refTab text-center pt-4 pb-4 ps-1">
      <ul>
        <li>
          <a href="https://www.facebook.com/SunHairCompany" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook Icon" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sunhaircompany_official/" target="_blank" rel="noopener noreferrer">
            <img src={IgIcon} alt="Facebook Icon" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/84912124125" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="Facebook Icon" className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
