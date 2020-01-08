import React from "react";
import "./styles.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/" className="NavItems">
        Home
      </Link>
      <Link to="/about" className="NavItems">
        About
      </Link>
      <Link to="/gallery" className="NavItems">
        Gallery
      </Link>
    </div>
  );
}
