import useAuth from "../../hooks/useAuth";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router";
import GoogleLoginButton from "../Authentication/GoogleLoginButton";
import LoginForm from "../Authentication/LoginForm";
import Dashboard from "./Dashboard";
// import ReactFacebookLogin from "react-facebook-login";

// Main Home Component
function Home() {
  const {
    auth,
    googleLogin,
    globalLogout,
    customLogin
  } = useAuth();

 

  return (
    <>
      {auth ? (
        <div>
          <Dashboard logout={globalLogout} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <h1 className="text-yellow-200 text-2xl mb-4">Login</h1>
          <LoginForm onLogin={customLogin} />
          <GoogleLoginButton
            onSuccess={googleLogin}
            onFailure={(err) => console.error("Google Login Failed:", err)}
          />
          
        </div>
      )}
    </>
  );
}

export default Home;
