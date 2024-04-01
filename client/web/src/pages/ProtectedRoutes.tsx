import { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Transactions } from "./transactions/Transactions";
import { Parties } from "./Parties/Parties";
import { Logout } from "./Logout";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Home } from "../pages/Home";
import { AddParty } from "./Parties/AddParty";
import { useAuth } from "../utils/auth";
import { EditParty } from "./Parties/EditParty";
import { DeleteParty } from "./Parties/DeleteParty";
import { PageNotFound } from "./PageNotFound";
import { AddTransaction } from "./transactions/AddTransaction";
import { EditTransaction } from "./transactions/EditTransaction";
import { DeleteTransaction } from "./transactions/DeleteTransaction";

export const ProtectedRoutes = () => {
  const { credential } = useAuth();
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      {credential.user ? (
        <>
          <Route path="parties" element={<Parties />} />
          <Route path="add_party" element={<AddParty />} />
          <Route path="edit_party" element={<EditParty />} />
          <Route path="delete_party" element={<DeleteParty />} />

          <Route path="transaction/:id" element={<Transactions />} />
          <Route path="add_transaction" element={<AddTransaction />} />
          <Route path="edit_transaction" element={<EditTransaction />} />
          <Route path="delete_transaction" element={<DeleteTransaction />} />

          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />} />
        </>
      )}
    </Routes>
  );
};
