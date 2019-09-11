import React, { Component } from "react";
import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Footer from "./components/footer/footer.conponent";
class App extends Component {
  state = {
    users: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Users Rolodex</h1>
        <SearchBox
          placeholder="Search Users"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
        <Footer />
      </div>
    );
  }
}

export default App;
