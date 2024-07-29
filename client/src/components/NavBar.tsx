import { useContext, useEffect, useRef, useState } from "react";
import { decodeToken } from "react-jwt";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../utils/auth";

export const NavBar = () => {
  const [user, setUser] = useState("");
  const { credential } = useAuth();
  const { showNav, setShowNav } = useAuth();
  const location = useLocation();

  const handlenav = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {credential.user ? (
            <div className="text-white font-semibold text-lg">DrCr App</div>
          ) : (
            <NavLink to="/" className="text-white font-semibold text-lg">
              DrCr App
            </NavLink>
          )}
        </div>
        {credential.user ? (
          <div className="hidden md:block">
            <NavLink to="/dashboard" className="text-white mx-4">
              Dashboard
            </NavLink>
            <NavLink to="/parties" className="text-white mx-4">
              Parties
            </NavLink>
            <NavLink to="/wallet" className="text-white mx-4">
              Wallet
            </NavLink>
            <NavLink to="/expenses" className="text-white mx-4">
              Expenses
            </NavLink>
            <NavLink to="/profile" className="text-white mx-4">
              Hi {"  "}
              {credential.user}
            </NavLink>
            <NavLink to="/logout" className="text-white mx-4">
              Logout
            </NavLink>
          </div>
        ) : (
          <div className="hidden md:block">
            <NavLink to="/login" className="text-white mx-4">
              Login
            </NavLink>
            <NavLink to="/register" className="text-white mx-4">
              SignUp
            </NavLink>
          </div>
        )}
        <div className="md:hidden">
          <button onClick={handlenav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              id="menu"
            >
              <path
                fill="#fff"
                d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {credential.user ? (
        <div
          hidden
          className={`${
            showNav ? "block" : "hidden"
          }  md:hidden flex flex-col container mx-auto justify-between items-center`}
        >
          <NavLink to="/dashboard" className="text-white mx-4">
            Dashboard
          </NavLink>
          <NavLink to="/parties" className="text-white mx-4">
            Parties
          </NavLink>
          <NavLink to="/wallet" className="text-white mx-4">
            Wallet
          </NavLink>
          <NavLink to="/expenses" className="text-white mx-4">
            Expenses
          </NavLink>
          <NavLink to="/profile" className="text-white mx-4">
            Hi {"  "}
            {credential.user}
          </NavLink>
          <NavLink to="/logout" className="text-white mx-4">
            Logout
          </NavLink>
        </div>
      ) : (
        <div
          className={`${
            showNav ? "block" : "hidden"
          }  md:hidden flex flex-col container mx-auto justify-between items-center`}
        >
          <NavLink to="/login" className="text-white mx-4">
            Login
          </NavLink>
          <NavLink to="/register" className="text-white mx-4">
            SignUp
          </NavLink>
        </div>
      )}
    </nav>
  );
};
