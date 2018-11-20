import React, { Component } from "react";

// components
import Table from "../Table/Table";

export default class Landing extends Component {
  state = {
    items: [],
    err: "",
    search: ""
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

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { items, search } = this.state;
    let filteredSearch = items.filter(
      item => item.username.indexOf(search) !== -1
    );
    return (
      <div className="app">
        <h1>Welcome to David's Component Library</h1>
        <input
          type="search"
          name="search"
          onChange={this.onChangeHandler}
          value={search}
          placeholder="type something to search..."
        />
        <Table items={filteredSearch} />
      </div>
    );
  }
}
