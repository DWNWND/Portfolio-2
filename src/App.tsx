import Layout from "./components/Layout";
import Home from "./routes/Home";
import RouteNotFound from "./routes/RouteNotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Hotjar from "@hotjar/browser";

const siteId = 3663593;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <RouteNotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
