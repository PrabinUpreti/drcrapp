import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { loginRequest } from "../services/loginService";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [credential, setCredential] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (user, password) => {
    console.log("user", user);

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
    } else setError(result.data);
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
    <AuthContext.Provider value={{ credential, login, error, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
