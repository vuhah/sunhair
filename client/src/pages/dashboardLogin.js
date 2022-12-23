import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthChecked } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function DashboardLogin() {
  const [typingUsername, setTypingUsername] = useState("");
  const [typingPassword, setTypingPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typingUsername === "admin" && typingPassword === "admin123") {
      dispatch(setAuthChecked({ authChecked: true }));
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <form>
        <label>Username</label>
        <input
          type="text"
          value={typingUsername}
          onChange={(e) => setTypingUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={typingPassword}
          onChange={(e) => setTypingPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
