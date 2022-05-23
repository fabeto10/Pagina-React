//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import All from "./component/All.js";

import { Card } from "./component/Card.js";
import { Jumbotron } from "./component/Jumbotron.js";
import { Navbar } from "./component/Navbar.js";

//render your react application
ReactDOM.render(<><Navbar /><div className="container"><Jumbotron /><Card /></div></>, document.querySelector("#app"));
