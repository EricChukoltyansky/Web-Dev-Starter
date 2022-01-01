import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PoliticsProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// domain: dev-25s5gpi2.us.auth0.com
// Client id: n2eTOkJYrEXLtv4PRePsSQcnaYkUxPWt

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-25s5gpi2.us.auth0.com"
      clientId="n2eTOkJYrEXLtv4PRePsSQcnaYkUxPWt"
      redirectUri={window.location.origin}
    >
      <PoliticsProvider>
        <App />
      </PoliticsProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
