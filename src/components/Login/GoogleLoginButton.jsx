import { GoogleLogin } from "@react-oauth/google";
import React from "react";

export default function GoogleLoginButton({
  handleLoginFailure,
  handleLoginSuccess,
}) {
  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
}
