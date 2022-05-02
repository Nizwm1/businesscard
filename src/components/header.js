import React from "react";
import Image from "../images/profile.jpg";

export default function Header() {
  return (
    <header>
      <img className="head-pic" src={Image} />
      <div className="info">
        <h2 className="head-name">Laura Smith</h2>
        <h3 className="head-title">Frontend Developer</h3>
      </div>
    </header>
  );
}
