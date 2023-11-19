import { FacebookIcon, IgIcon, WhatsappIcon, Youtube, Alibaba } from "../images/common";
export default function RefTab() {
  return (
    <div className="refTab text-center pt-3 pb-3 ps-1">
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
        <li>
          <a href="https://www.youtube.com/@sunhaircompanyofficial" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="Facebook Icon" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://sunhaircompany.trustpass.alibaba.com/?fbclid=IwAR2CLcdjpfPk7GqYTkOAgbAdGObI3cEAREaNzkC1qyEFxzab5rC4ZhLEvSc" target="_blank" rel="noopener noreferrer">
            <img src={Alibaba} alt="Alibaba Icon" className="icon rounded-3" />
          </a>
        </li>
      </ul>
    </div>
  );
}
