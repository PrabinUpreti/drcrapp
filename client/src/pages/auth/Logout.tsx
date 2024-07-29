import { useEffect } from "react";
import { useAuth } from "../../utils/auth";
import { useStore } from "../../utils/store";

export const Logout = () => {
  const { parties, setParties, navigate, getDrSum, getCrSum } = useStore();

  const { logout } = useAuth();
  useEffect(() => {
    setParties([]);
    logout();
  }, []);
  return null;
};
