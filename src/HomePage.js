import React, { Component } from "react";
import ItemList from "./ItemList";
import FilterAndSort from "./FilterAndSort";
import CartPanel from "./CartPanel";
import items from "./static/itemInfo";
import categories from "./static/categoryInfo";
import _ from "lodash";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
      searchfield: "",
      categoryfilter: ""
    };
  }
  componentDidMount() {
    this.setState({ items, categories });
  }

  handleSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  handleCategory = event => {
    this.state.categoryfilter === event.target.id
      ? this.setState({ categoryfilter: "" })
      : this.setState({ categoryfilter: event.target.id });
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

  handleAddCart = tarId => {
    let nextState = _.cloneDeep(this.state.items);
    nextState = nextState.map(item => {
      return item._id === tarId
        ? Object.assign({}, item, {
            qtyStock: item.qtyStock - 1,
            qtyCart: item.qtyCart + 1
          })
        : item;
    });
    this.setState({ items: nextState });
  };

  handleRemoveFromCart = tarId => {
    let nextState = _.cloneDeep(this.state.items);
    nextState = nextState.map(item => {
      return item._id === tarId
        ? Object.assign({}, item, {
            qtyStock: item.qtyStock + item.qtyCart,
            qtyCart: 0
          })
        : item;
    });
    this.setState({ items: nextState });
  };
  render() {
    const { categories, items, searchfield, categoryfilter } = this.state;
    const {
      handleSearch,
      toggleLike,
      handleAddCart,
      handleCategory,
      handleRemoveFromCart
    } = this;
    return (
      <div className="flex w-90 center justify-between animated fadeIn">
        <FilterAndSort
          categories={categories}
          handleSearch={handleSearch}
          handleCategory={handleCategory}
        />
        <ItemList
          items={items}
          categories={categories}
          searchfield={searchfield}
          toggleLike={toggleLike}
          handleAddCart={handleAddCart}
          categoryfilter={categoryfilter}
        />
        <CartPanel items={items} handleRemove={handleRemoveFromCart} />
      </div>
    );
  }
}

export default HomePage;
