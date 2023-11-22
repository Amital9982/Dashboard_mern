import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img
        src="https://png.pngtree.com/template/20210709/ourmid/pngtree-shopping-logo-design-image_545854.jpg"
        alt="Logo"
        className="logo"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            {" "}
            <Link to="/productlist">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right ">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
