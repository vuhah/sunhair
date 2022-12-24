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
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setTypingUsername(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setTypingPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
