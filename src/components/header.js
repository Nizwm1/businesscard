import React from "react";
import profile from "../images/profile.webp";
import email from "../images/email-icon.svg";
import linkedin from "../images/linkedin-icon.svg";

export default function Header() {
  return (
    <header>
      <img className="head-pic" src={profile} />
      <div>
        <h2 className="head-name">Laura Smith</h2>
        <h4 className="head-title">Frontend Developer</h4>
        <a className="head-email" href="#">
          laurasmith.website
        </a>

        <div className="social-icon">
          <button className="email-icon">
            <img className="icon-email" src={email} />
            Email
          </button>
          <button className="linkedin-icon">
            <img className="icon-linkedin" src={linkedin} />
            LinkedIn
          </button>
        </div>
      </div>
    </header>
  );
}
