import { useForm } from "react-hook-form";
import { useLogin } from "../../context/LoginContext";
import { toast } from "react-toastify";
// import './login.scss';

const LoginPopup = () => {
  const { showLogin, closeLogin } = useLogin();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const existingUser = localStorage.getItem("loggedInUser");

    if (existingUser) {
      toast.warning("You already logged in!");
      reset();
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(data));
    toast.success("Login successful!");
    reset();
    closeLogin();
  };

  if (!showLogin) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <button className="submit" type="submit">
            Login
          </button>
          <button className="cancel" type="button" onClick={closeLogin}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
