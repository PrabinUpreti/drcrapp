import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Parties } from "./pages/Parties/Parties";
import { NavBar } from "./components/NavBar";
import { Logout } from "./pages/Logout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/logout",
//         element: <Logout />,
//       },
//       {
//         path: "/signup",
//         element: <Login />,
//       },
//       {
//         path: "/parties",
//         element: <Parties />,
//       },
//       {
//         path: "/parties:id",
//         element: <Login />,
//       },
//       {
//         path: "/parties:id:id",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
