import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <Header title="Amazing recipes">
        <Link
          to="/recipes"
          className="text-uppercase btn btn-secondary btn-large mt-3"
        >
          Search recipes
        </Link>
      </Header>
    );
  }
}

export default Home;
