import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className=" bg-white pv3 mb4 shadow-5 flex justify-around">
      <div className="f1 fw7 purple pointer dim">
        P<img src="img/pokemart-logo.png" width="50" />
        Ké
        <br />
        MART
      </div>
      <SearchBar />
      <div className="flex f1 grow self-center mr4 pointer green">
        <i className="fas  fa-shopping-cart " />
        Cart
      </div>
      <i className="fas fa-sign-out-alt f1 flex light-red self-center" />
    </div>
  );
};

export default NavBar;
