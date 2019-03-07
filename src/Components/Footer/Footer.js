import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-gray white-80 pv4 mt3">
      <p className="f4">
        <span className="dib ml4 mr4">made in react</span>
        <a className="link white-80 hover-light-purple" href="/terms">
          Terms
        </a>{" "}
        /
        <a className="link white-80 hover-gold" href="/privacy">
          {" "}
          Privacy{" "}
        </a>{" "}
        /
        <a className="" href="https://github.com/jeromelimzw">
          <img
            src="/img/github.png"
            alt="github"
            className="br-100 dim"
            width="50"
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
