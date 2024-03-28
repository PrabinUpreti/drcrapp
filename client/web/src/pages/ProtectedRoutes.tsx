import { Routes, Route, Link } from "react-router-dom";
import { Parties } from "../pages/Parties";
import { Login } from "../pages/login";
import { Logout } from "../pages/logout";
import Transactions from "../pages/Transactions";
import { AddParties } from "../pages/AddParties";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Home } from "../pages/Home";
import { useAuth } from "../utils/auth";

export const ProtectedRoutes = () => {
  const { credential } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {credential.user ? (
        <>
          <Route path="/parties" element={<Parties />}></Route>
          <Route path="addParties" element={<AddParties />} />
          <Route path="transaction/:id" element={<Transactions />} />
          <Route path="logout" element={<Logout />} />
        </>
      ) : (
        <Route path="login" element={<Login />} />
      )}
    </Routes>
  );
};
