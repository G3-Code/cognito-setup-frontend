import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingForm from "./LandingForm";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={LandingForm} />
    </Router>
  );
}

export default App;
