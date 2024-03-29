import React from "react";
import Navigation from "./navigation/Navigation";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0Config } from "./config/auth0";

function App() {

  return (
    <Auth0Provider
      domain={Auth0Config.domain}
      clientId={Auth0Config.clientId}
      redirectUri={Auth0Config.redirectUri}
      audience={Auth0Config.audience}
      scope={Auth0Config.scope}
    >
      <Navigation />
    </Auth0Provider>
  );
}

export default App;
