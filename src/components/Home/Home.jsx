import useAuth from "../../hooks/useAuth";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router";
import GoogleLoginButton from "../Authentication/GoogleLoginButton";
import FacebookLoginButton from "../Authentication/FacebookLoginButton";
import LoginForm from "../Authentication/LoginForm";
import Dashboard from "./Dashboard";
import ReactFacebookLogin from "react-facebook-login";

// Main Home Component
function Home() {
  const {
    auth,
    handleAuthentication,
    googleLogin,
    globalLogout,
    handleFacebookCallback,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    console.log("Logging in with:", { username, password });
    try {
      const res = await axiosInstance.post("/api/v1/auth/login", {
        username,
        password,
      });
      const { token } = res.data.data;
      if (res.success) {
        console.log(res.data);
      }
      handleAuthentication(token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {auth ? (
        <div>
          <Dashboard logout={globalLogout} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <h1 className="text-yellow-200 text-2xl mb-4">Login</h1>
          <LoginForm onLogin={handleLogin} />
          <GoogleLoginButton
            onSuccess={googleLogin}
            onFailure={(err) => console.error("Google Login Failed:", err)}
          />
          <ReactFacebookLogin
            buttonStyle={{ padding: "6px" }}
            appId="1163251285221291"
            fields="name,email,picture"
            callback={handleFacebookCallback}
          />
        </div>
      )}
    </>
  );
}

export default Home;
