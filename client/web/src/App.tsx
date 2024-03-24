import "./App.css";
import { NavBar } from "./components/NavBar";
import { Parties } from "./pages/Parties";
import { Login } from "./pages/login";
import { Routes, Route, Link } from "react-router-dom";
import { Logout } from "./pages/logout";
import Transactions from "./pages/Transactions";
function App() {
  return (
    <h6 className="text-center font-extrabold text-lg text-blue-950">
      <NavBar />
      <Routes>
        <Route path="/" element={<Parties />} />
        <Route path="transaction/:id" element={<Transactions />} />

        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </h6>
  );
}

export default App;
