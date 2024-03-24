import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedtoken: any = decodeToken(token);
      setUser(decodedtoken.username);
    }
  }, []);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white font-semibold text-lg">
          Hello, {user}
        </NavLink>
        <div>
          <NavLink to="/login" className="text-white mx-4">
            Login
          </NavLink>
          <NavLink to="/logout" className="text-white mx-4">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
