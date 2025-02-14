import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const clientId =
  "726252295971-bgaujf253t731rqhiosiid8gu13rffgp.apps.googleusercontent.com"; // Replace with your actual client ID

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </GoogleOAuthProvider>
);
