import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookLoginButton = ({ appId, onCallback }) => {
  return (
    <div className="flex justify-center">
      <FacebookLogin
        buttonStyle={{ padding: "6px" }}
        appId={appId}
        fields="name,email,picture"
        callback={onCallback}
      />
    </div>
  );
};

export default FacebookLoginButton