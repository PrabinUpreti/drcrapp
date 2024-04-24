import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest } from "../services/loginService";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { signUpRequest } from "../services/signupService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [credential, setCredential] = useState({});
  const [isDisable, setIsDisable] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const login = async (user, password) => {
    console.log("user", password);

    const result = await loginRequest(user, password);
    if (result.status === 200) {
      setError(null);
      localStorage.setItem("token", result.data);
      const decodedtoken: any = decodeToken(result.data);
      setCredential({
        user: decodedtoken.username,
        id: decodedtoken._id,
        admin: decodedtoken.admin,
      });
      navigate("/parties");
      setIsDisable(false);
    } else {
      setError(result.data);
      setIsDisable(false);
    }
  };
  const register = async (username, email, password) => {
    console.log("user", username);

    const result: any = await signUpRequest(username, email, password);
    if (result.status === 200) {
      setError(null);
      setIsDisable(false);
      localStorage.setItem("token", result.token);
      const decodedtoken: any = decodeToken(result.token);
      setCredential({
        user: decodedtoken.username,
        id: decodedtoken._id,
        admin: decodedtoken.admin,
      });
      navigate("/parties");
      setIsDisable(false);
    } else {
      setError(result.data);
      setIsDisable(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");

    if (!token) {
      const decodedtoken: any = decodeToken(token);
      setCredential({
        user: null,
        id: null,
        admin: null,
      });
    }
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedtoken: any = decodeToken(token);
      setCredential({
        user: decodedtoken.username,
        id: decodedtoken._id,
        admin: decodedtoken.admin,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        credential,
        login,
        error,
        setError,
        logout,
        isDisable,
        setIsDisable,
        register,
        showNav,
        setShowNav,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
