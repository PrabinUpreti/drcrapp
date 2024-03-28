import "./App.css";
import { NavBar } from "./components/NavBar";
import { AuthProvider, useAuth } from "./utils/auth";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
function App() {
  return (
    <AuthProvider>
      <NavBar />
      <ProtectedRoutes />
    </AuthProvider>
  );
}

export default App;
