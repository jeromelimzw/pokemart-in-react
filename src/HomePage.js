import React, { Component } from "react";
import ItemList from "./ItemList";
import FilterAndSort from "./FilterAndSort";
import CartPanel from "./CartPanel";
import items from "./itemInfo";
import categories from "./categoryInfo";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], categories: [] };
  }

  componentDidMount() {
    this.setState({ items, categories });
  }

  render() {
    const { categories, items } = this.state;
    return (
      <div className="flex w-90 center justify-between animated fadeIn">
        <FilterAndSort categories={categories} />
        <ItemList items={items} categories={categories} />
        <CartPanel />
      </div>
    );
  }
}

export default HomePage;
