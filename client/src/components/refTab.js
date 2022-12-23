import { FacebookIcon, IgIcon, WhatsappIcon } from "../images/common";
export default function RefTab() {
  return (
    <div className="refTab text-center pt-4 pb-4 ps-1">
      <ul>
        <li>
          <a href="/">
            <img src={FacebookIcon} alt="Facebook Icon" className="icon"/>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={IgIcon} alt="Facebook Icon" className="icon"/>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={WhatsappIcon} alt="Facebook Icon" className="icon"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
