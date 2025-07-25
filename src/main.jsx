import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginProvider>
      <ToastContainer></ToastContainer>
      <App />

    </LoginProvider>
  </BrowserRouter>
);
