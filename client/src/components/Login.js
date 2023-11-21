import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleLogin = async () => {
    console.log("email,password", email, password);
    let result = await fetch("http://localhost:4500/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter connect details");
    }
  };
  return (
    <div className="login">
      <h1>LogIn</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="inputBox"
        type="text"
        placeholder="Enter Email
"
      />
      <input
        className="inputBox"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder=" Enter Password"
      />
      <button onClick={handleLogin} className="appbutton" type="button">
        Log In
      </button>
    </div>
  );
};

export default Login;
