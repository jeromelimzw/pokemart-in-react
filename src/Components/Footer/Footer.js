import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-gray white pv3 mt5 tc flex justify-between ">
      <a className="" href="https://github.com/jeromelimzw">
        <img
          src="/img/github.png"
          alt="github"
          className="tl ml4 br-100 dim"
          width="40"
        />
      </a>

      <span className="f3 dib ml4 mr4">
        {`made with `}
        <i className="fas f2 fa-heart red animated infinite pulse" />
        {` in `}
        <a href="https://reactjs.org/">
          <i className="fab fa-react f2 blue fw7 pointer grow-large" />
        </a>

        {" & with "}
        <a
          href="http://tachyons.io/"
          className=" f3 helvetica no-underline white pointer hover-light-blue"
        >
          Tachyons
        </a>
      </span>
    </footer>
  );
};

export default Footer;
