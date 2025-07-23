import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import HOXLaunch from "../pages/hox_launch/HOXLaunch";
import BePartner from "../pages/become_a_partner/BePartner";
import Contact from "../pages/contact/Contact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hox-launch" element={<HOXLaunch />} />
      <Route path="/become-a-partner" element={<BePartner />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRoutes;
