import React from "react";
import twitter from "../images/twitter-icon.svg";
import facebook from "../images/facebook-icon.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

export default function Footer() {
  return (
    <footer>
      <a className="icons-twitter" href="#">
        <img src={twitter} />
      </a>
      <a className="icons-facebook" href="#">
        <img src={facebook} />
      </a>
      <a className="icons-instagram" href="#">
        <img src={instagram} />
      </a>
      <a className="icons-gitub" href="#">
        <img src={github} />
      </a>
    </footer>
  );
}
