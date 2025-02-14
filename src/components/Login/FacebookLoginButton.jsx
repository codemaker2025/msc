import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";

export default function FacebookLoginButton({ handleFacebookCallback }) {
  return (
    <div className=" flex justify-center">
      <FacebookLogin
        buttonStyle={{ padding: "6px" }}
        appId="1163251285221291"
        fields="name,email,picture"
        callback={handleFacebookCallback}
      />
    </div>
  );
}
