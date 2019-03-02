import React, { Component } from "react";
import { NavLink as Link, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import ExitPage from "./ExitPage";
import CheckoutPage from "./CheckoutPage";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className=" bg-near-white pv3 mb4 shadow-5 flex justify-around center">
          <Link
            to="/home"
            className="f1 fw7 purple pointer grow no-underline ttu"
          >
            P<img src="img/pokemart-logo.png" width="50" alt="o in Pokemart" />
            Ké
            <br />
            MART
          </Link>
          <div className="flex">
            <Link
              to="/checkout"
              className="f1 grow self-center mr4 pointer green no-underline"
            >
              <i className="fas  fa-shopping-cart " />
              Cart
            </Link>
            <Link to="/exit" className=" self-center">
              <i className="fas fa-sign-out-alt f1 light-red ba br3 bg-gray pa3 pointer dim mh3 b--navy bw3" />
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={HomePage} />} />
          <Route path="/exit" component={ExitPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default NavBar;
