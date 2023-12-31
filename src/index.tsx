import { StrictMode } from "react";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { Footer } from "./template/Footer";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Footer title="Scroll velocity" />
  </StrictMode>
);
