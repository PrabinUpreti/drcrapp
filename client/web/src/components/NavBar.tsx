import { useContext, useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../utils/auth";

export const NavBar = () => {
  const [user, setUser] = useState("");
  const { credential } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white font-semibold text-lg">
          DrCr App
        </NavLink>
        <div>
          {credential.user ? (
            <>
              <NavLink to="/parties" className="text-white mx-4">
                Parties
              </NavLink>
              <NavLink to="/transaction" className="text-white mx-4">
                Transaction
              </NavLink>
              <NavLink to="/profile" className="text-white mx-4">
                Hi {"  "}
                {credential.user}
              </NavLink>
              <NavLink to="/logout" className="text-white mx-4">
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="text-white mx-4">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
