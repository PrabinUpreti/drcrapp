import { useEffect } from "react";
import { useAuth } from "../utils/auth";

export const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, []);
  return null;
};
