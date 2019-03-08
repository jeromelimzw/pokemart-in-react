import React, { Component } from "react";
import ItemList from "./Components/ItemList/ItemList";
import FilterAndSort from "./Components/FilterAndSort/FilterAndSort";
import CartPanel from "./Components/CartPanel/CartPanel";
import {
  getItems,
  toggleLikes,
  handleAddCart,
  handleRemoveFromCart,
  toggleDescription
} from "./static/itemInfo";
import { getCategories } from "./static/categoryInfo";
import CategoryFilter from "./Components/CategoryFilter/CategoryFilter";
import Sound from 'react-sound'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
      searchfield: "",
      categoryfilter: "",
      sorting: "",
      isRegisterSoundOn: true
    };
  }

  componentDidMount() {
    this.setState({ items: getItems(), categories: getCategories() });
  }

  toggleDescription = () => {
    const nextState = toggleDescription();
    this.setState({ items: nextState });
  };

  toggleLikes = tarId => {
    const nextState = toggleLikes(tarId);
    this.setState({ items: nextState });
  };

  handleAddCart = tarId => {
    const nextState = handleAddCart(tarId);
    this.setState({ items: nextState, isRegisterSoundOn: true });
  };

  handleRemoveFromCart = tarId => {
    const nextState = handleRemoveFromCart(tarId);
    this.setState({ items: nextState });
  };

  handleSortBy = event => {
    this.setState({ sorting: event.target.value });
  };

  handleSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  handleCategory = event => {
    this.state.categoryfilter === event.target.id
      ? this.setState({ categoryfilter: "" })
      : this.setState({ categoryfilter: event.target.id });
  };

  render() {
    const {
      categories,
      items,
      searchfield,
      categoryfilter,
      sorting,
      isRegisterSoundOn
    } = this.state;
    const {
      handleSearch,
      handleAddCart,
      handleCategory,
      handleRemoveFromCart,
      handleSortBy,
      toggleDescription,
      toggleLikes,
    } = this;
    return (
      <div>
         <Sound
          url="mp3/cash-register.mp3"
          playStatus={isRegisterSoundOn ? Sound.status.PLAYING : Sound.status.STOPPED}
          volume='50'
        />

        <CategoryFilter
          categories={categories}
          handleCategory={handleCategory}
        />
        <div className="flex w-90 center justify-between animated fadeIn">
          <FilterAndSort
            categories={categories}
            handleSearch={handleSearch}
            handleCategory={handleCategory}
            handleSortBy={handleSortBy}
          />
          <ItemList
            items={items}
            categories={categories}
            searchfield={searchfield}
            toggleLikes={toggleLikes}
            handleAddCart={handleAddCart}
            categoryfilter={categoryfilter}
            sorting={sorting}
            toggleDescription={toggleDescription}
          />
          <CartPanel items={items} handleRemove={handleRemoveFromCart} />
        </div>
      </div>
    );
  }
}

export default HomePage;
