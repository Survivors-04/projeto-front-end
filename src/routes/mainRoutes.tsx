import { Route, Routes } from "react-router-dom";
import UserProvider from "../Context/UserContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Marketplace from "../pages/Marketplace";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const MainRoutes = () => {
  return (
    <UserProvider> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/marketplace" element={<Marketplace />} />
    </Routes>
    </UserProvider>
  );
};

export default MainRoutes;
