import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
    return <GoogleLogin onSuccess={onSuccess} onError={onFailure} />;
  };

  export default GoogleLoginButton