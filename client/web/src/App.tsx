import "./App.css";
import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./utils/auth";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { StoreProvider } from "./utils/store";
function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <NavBar />
        <ProtectedRoutes />
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;
