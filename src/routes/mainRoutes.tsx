import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
  return (
    <Routes>
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
    </Routes>
  );
};

export default MainRoutes;
