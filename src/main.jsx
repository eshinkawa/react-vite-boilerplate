import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from './App';
import Tela2 from "./telas/tela2";
import Login from "./telas/login";

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />, 
  },
  {
    path: "tela2",
    element: <Tela2 />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);