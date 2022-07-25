import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import reportWebVitals from "./reportWebVitals";

declare global {
  interface Window {
    renderCricketApp: any;
    unmountCricketApp: any;
    mf_env_: any;
    _env_: any;
  }
}

window.renderCricketApp = (containerId: string) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountCricketApp = (containerId: string) => {
  // ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("CricketApp-container")) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
