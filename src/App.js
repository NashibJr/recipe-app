import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Developer from "./pages/Developer";

const App = () => {
  return (
    <Router>
      <div className="recipe-links">
        <h1>Rash recipe app</h1>
        <div className="links">
          <Link to="/" className="home-links">
            Home
          </Link>
          <Link to="/about" className="home-links">
            About
          </Link>
          <Link to="/developer" className="home-links">
            Developer Contact
          </Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </Router>
  );
};

export default App;
