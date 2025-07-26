import { ToastContainer } from "react-toastify";
import LoginPopup from "./components/loginpopup/LoginPopup";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
      <LoginPopup />

      <ToastContainer position="top-right"/>
    </>
  );
};

export default App;
