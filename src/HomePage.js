import React, { Component } from "react";
import ItemList from "./ItemList";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <ItemList />;
  }
}

export default HomePage;
