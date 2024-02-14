import { PageRouter } from "./PageRouter";
import * as ReactDOM from "react-dom";
import * as React from "react";

const searchContainer = document.getElementById("searchContainer");
if (!searchContainer) {
  throw new Error('could not find "searchContainer" element');
}

ReactDOM.render(
  <React.StrictMode>
     <PageRouter/>
  </React.StrictMode>,
  searchContainer
);