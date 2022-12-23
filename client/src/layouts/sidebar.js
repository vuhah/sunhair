import { BrandRemoveBg } from "../images/common";
import {
  HomeIcon,
  Store,
  CompanyInformation,
  EventIcon,
} from "../images/dashboard";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar ms-1 mt-2 ps-4">
      <img src={BrandRemoveBg} alt="" className="brand" />
      <ul className="mt-5">
        <li>
          <Link to="/dashboard/home" className="d-flex align-items-center link">
            <img src={HomeIcon} alt="" className="icon"/>
            <p className="d-inline-block link-text ms-4">Home Element</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/store" className="d-flex align-items-center link">
            <img src={Store} alt="" className="icon"/>
            <p className="d-inline-block link-text ms-4">Store</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/companyinformation" className="d-flex align-items-center link">
            <img src={CompanyInformation} alt="" className="icon"/>
            <p className="d-inline-block link-text ms-4">Company Information</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/event" className="d-flex align-items-center link">
            <img src={EventIcon} alt="" className="icon"/>
            <p className="d-inline-block link-text ms-4">Broadcast Event</p>
          </Link>
        </li>

      </ul>
    </div>
  );
}
