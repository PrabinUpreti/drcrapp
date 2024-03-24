import { useEffect } from "react";

export const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  return null;
};
