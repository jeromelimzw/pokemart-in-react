import React, { Component } from "react";
import ItemList from "./ItemList";
import FilterAndSort from "./FilterAndSort";
import CartPanel from "./CartPanel";
import items from "./itemInfo";
import categories from "./categoryInfo";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], categories: [], searchfield: "" };
  }
  componentDidMount() {
    this.setState({ items, categories });
  }

  handleSearch = event => {
    this.setState({ searchfield: event.target.value });
    console.log(this.state.searchfield);
  };

  render() {
    const { categories, items, searchfield } = this.state;
    const { handleSearch } = this;
    return (
      <div className="flex w-90 center justify-between animated fadeIn">
        <FilterAndSort categories={categories} handleSearch={handleSearch} />
        <ItemList
          items={items}
          categories={categories}
          searchfield={searchfield}
        />
        <CartPanel />
      </div>
    );
  }
}

export default HomePage;
