import React from "react";
import "./LoaderLogo.css";
import logo from "../../assests/images/kartik_animated.png";

function LogoLoader() {
  return <img id="logo" className="raw_logo" src={logo} alt="Kartik Mishra" />;
}

export default LogoLoader;
