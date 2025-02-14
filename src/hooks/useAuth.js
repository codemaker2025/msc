import { useRecoilState } from "recoil";
import { authState } from "../Recoil/atoms/authState"; // Recoil atom with persistence
import axiosInstance from "../api/axiosInstance";

export default function useAuth() {
  const [auth, setAuth] = useRecoilState(authState);



  const googleLogin = (response) => {
    const { credential } = response;
    setAuth(credential); // Sets Google login token to Recoil state
  };

  const customLogout = async () => {
    const response = await axiosInstance.post('/api/v1/settings/logout')
    console.log(response, "test");
    setAuth(null);

  };
  const globalLogout = () => {
    setAuth(null);

  }
  const handleFacebookCallback = (response) => {
    console.log(response);

    if (response?.status === "unknown") {
      console.error("Sorry!", "Something went wrong with Facebook Login.");
      return;
    }
    setAuth(response);
  };
  const customLogin = async (username, password) => {
    console.log("Logging in with:", { username, password });
    try {
      const res = await axiosInstance.post("/api/v1/auth/login", {
        username:'Albin.s@webandcrafts.in',
        password:'Albin@123',
      });
      const { token } = res.data.data;
      if (res.success) {
        console.log(res.data);
      }
      setAuth(token);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    auth,
    googleLogin,
    globalLogout,
    customLogout,
    handleFacebookCallback,
    customLogin
  };
}
