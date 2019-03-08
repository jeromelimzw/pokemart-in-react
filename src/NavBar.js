import React, { Component } from "react";
import { NavLink as Link, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import ExitPage from "./Components/ExitPage/ExitPage";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";
import Footer from "./Components/Footer/Footer";
import Sound from "react-sound";
class NavBar extends Component {
  constructor() {
    super();
    this.state = { isMusicOn: true };
  }

  toggleMusic = () => {
    this.setState({ isMusicOn: !this.state.isMusicOn });
  };

  render() {
    const { toggleMusic } = this;
    const { isMusicOn } = this.state;
    return (
      <div>
        <Sound
          url="mp3/Pokemart Theme.mp3"
          playStatus={isMusicOn ? Sound.status.PLAYING : Sound.status.PAUSED}
        />
        <nav className=" bg-near-white bw1 flex justify-between  shadow-5">
          <div className="flex justify-between">
            <Link
              to="/home"
              className="f2 fw7 bg-dark-red ph3 pv2 white no-underline tracked-tight"
            >
              p
              <img src="img/pokemart-logo.png" width="30" alt="o in Pokemart" />
              kémart
            </Link>
            <Link
              to="/home"
              className="self-center f3 gray no-underline pa3 ph4 hover-bg-dark-gray hover-white"
              activeClassName="bg-dark-gray white"
            >
              home
              <i className="fas fa-home ml2" />
            </Link>
          </div>
          <div className="flex justify-between">
            <i className={`fas fa-volume-${isMusicOn?'up':'off'} pointer self-center f3 gray no-underline pa3 ph4 hover-bg-dark-gray hover-white`} onClick={toggleMusic} />
            <Link
              to="/checkout"
              className="self-center f3 gray no-underline pa3 ph4 hover-bg-dark-gray hover-white"
              activeClassName="bg-dark-gray white"
            >
              cart
              <i className="fas fa-cart-plus " />
            </Link>

            <Link
              to="/exit"
              className=" self-center f3 gray no-underline pa3 mr3 hover-bg-dark-gray hover-white"
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
        <Footer />
      </div>
    );
  }
}

export default NavBar;
