import React, { Component } from "react";
import ItemList from "./ItemList";
import FilterAndSort from "./FilterAndSort";
import CartPanel from "./CartPanel";
import items from "./itemInfo";
import categories from "./categoryInfo";
import _ from "lodash";

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

  toggleLike = tarId => {
    let nextState = _.cloneDeep(this.state.items);
    nextState = nextState.map(item => {
      return item._id === tarId
        ? Object.assign({}, item, { isLiked: !item.isLiked })
        : item;
    });
    this.setState({ items: nextState });
  };

  render() {
    const { categories, items, searchfield } = this.state;
    const { handleSearch, toggleLike } = this;
    return (
      <div className="flex w-90 center justify-between animated fadeIn">
        <FilterAndSort categories={categories} handleSearch={handleSearch} />
        <ItemList
          items={items}
          categories={categories}
          searchfield={searchfield}
          toggleLike={toggleLike}
        />
        <CartPanel />
      </div>
    );
  }
}

export default HomePage;
