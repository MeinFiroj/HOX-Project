import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import HOXLaunch from "../pages/hox_launch/HOXLaunch";
import BePartner from "../pages/become_a_partner/BePartner";
import Contact from "../pages/contact/Contact";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Disclaimer from "../pages/Disclaimer";
import JoingingForm from "../components/joingingform/JoingingForm";
import CareerForm from "../pages/career/CareerForm";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hox-launch" element={<HOXLaunch />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/careers" element={<CareerForm />} />

      <Route path="/become-a-partner" element={<BePartner />}>
        <Route
          path="/become-a-partner/joining-form"
          element={<JoingingForm />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
