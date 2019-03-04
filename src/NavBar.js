import React, { Component } from "react";
import { NavLink as Link, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import ExitPage from "./ExitPage";
import CheckoutPage from "./CheckoutPage";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className=" bg-near-white bw1 flex justify-between shadow-5">
          <div className="flex justify-between">
            <Link
              to="/home"
              className="f2 fw7 bg-dark-red ph3 pv2 white no-underline tracked-tight"
            >
              p
              <img src="img/pokemart-logo.png" width="30" alt="o in Pokemart" />
              ké
              <i className="fab fa-mendeley" />
              art
            </Link>
            <Link
              to="/home"
              className="self-center f3 gray no-underline pa3 ph4"
              activeClassName="bg-dark-gray white"
            >
              home
              <i className="fas fa-home " />
            </Link>
          </div>
          <div className="flex justify-between">
            <Link
              to="/checkout"
              className="self-center f3 gray no-underline pa3 ph4"
              activeClassName="bg-dark-gray white"
            >
              cart
              <i className="fas fa-cart-plus " />
            </Link>

            <Link
              to="/exit"
              className=" self-center f3 gray no-underline pa3 mr3"
              activeClassName="bg-dark-gray white"
            >
              sign-out
              <i className="fas fa-sign-out-alt mh2" />
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={HomePage} />} />
          <Route path="/exit" component={ExitPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Redirect from="/" to="/home" />
        </Switch>
        <footer class="bg-dark-gray white-80 pv4 mt3">
          <p class="f4">
            <span class="dib ml4 mr4">made in react</span>
            <a class="link white-80 hover-light-purple" href="/terms">
              Terms
            </a>{" "}
            /
            <a class="link white-80 hover-gold" href="/privacy">
              {" "}
              Privacy{" "}
            </a>{" "}
            /
            <a
              class="link white-80 hover-green"
              href="https://github.com/jeromelimzw"
            >
              github
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default NavBar;
