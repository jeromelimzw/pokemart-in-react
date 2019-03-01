import React, { Component } from "react";
import ItemList from "./ItemList";
import FilterPanel from "./FilterPanel";
import CartPanel from "./CartPanel";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex w-90 center justify-between">
        <FilterPanel />
        <ItemList />
        <CartPanel />
      </div>
    );
  }
}

export default HomePage;
