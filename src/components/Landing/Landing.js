import React, { Component } from "react";

// components
import Table from "../Table/Table";

export default class Landing extends Component {
  state = {
    items: [],
    err: ""
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(items => this.setState({ items }))
      .catch(err => this.setState({ err }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className="app">
        <h1>Welcome to David's Component Library</h1>
        <Table items={items} />
      </div>
    );
  }
}
