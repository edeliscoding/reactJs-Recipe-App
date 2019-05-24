import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
  state = {};
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light text-uppercase">
          You are in the wrong place
        </h2>
        <Link to="/" className="text-uppercase btn btn-secondary">
          return home
        </Link>
      </Header>
    );
  }
}

export default Default;
