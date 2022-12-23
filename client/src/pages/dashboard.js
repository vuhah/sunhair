import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../layouts/sidebar";

export default function Dashboard() {
  const navigate = useNavigate();
  const authChecked = useSelector((state) => state.auth.authChecked);

  useEffect(() => {
    if (!authChecked) {
      navigate("./login");
    }
    else (
      navigate("./home")
    )
  },[]); 

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 text-white">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
