import { useRecoilState } from "recoil";
import { authState } from "../Recoil/atoms/authState"; // Recoil atom with persistence
import axiosInstance from "../api/axiosInstance";

export default function useAuth() {
  const [auth, setAuth] = useRecoilState(authState);

  function handleAuthentication(token) {
    setAuth(token); // Updates Recoil state, persisted by recoil-persist
  }

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
    setAuth(response); // Sets Facebook login response to Recoil state
  };

  return {
    auth,
    handleAuthentication,
    googleLogin,
    globalLogout,
    customLogout,
    handleFacebookCallback,
  };
}
