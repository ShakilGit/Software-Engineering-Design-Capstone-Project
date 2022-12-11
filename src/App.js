import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./pages/Home/Home.jsx";
import Profile from "./components/Profile/Profile";
import Home from "./pages/Home/Home.jsx";

import Login from "./pages/Login/Login";
import ChangePage from "./pages/ChangePage/ChangePage";
import Facility from "./pages/Facility/Facility";
import Location from "./pages/Location/Location";
import Contact from "./pages/Contact/Contact";
import GroundBooking from "./components/GroundBooking/GroundBooking";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/changePassword",
        element: <ChangePage />,
      },
      {
        path: "/facilites",
        element: <Facility />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/groundbooking",
        element: <GroundBooking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
