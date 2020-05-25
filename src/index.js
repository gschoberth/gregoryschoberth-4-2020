import React from "react";
import ReactDOM from "react-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faExternalLinkAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faExternalLinkAlt, faBars);

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
