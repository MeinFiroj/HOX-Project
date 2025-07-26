import { ToastContainer } from "react-toastify";
import LoginPopup from "./components/loginpopup/LoginPopup";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
gsap.registerPlugin(ScrollSmoother);

const App = () => {
  // ScrollSmoother.create({
  //   smooth: 1.2, 
  //   effects: true,
  // });
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MainRoutes />
      <Footer />
      <LoginPopup />

      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
