import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Marketplace from "../pages/Marketplace";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

interface IPrivateRoute {
  children: ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: IPrivateRoute) => {
  const isAuthenticated = localStorage.getItem("@TOKEN") !== null;

  return <>{isAuthenticated ? children : <Navigate to={redirectTo} />}</>;
};

const MainRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/">
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
