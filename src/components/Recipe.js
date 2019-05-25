import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {};
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            style={{ height: "14rem" }}
            className="img-card-top"
            alt="recipe"
          />
          <div className="card-body" text-autoCapitalize>
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              Provided by {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <Link
              to={`/recipes/${recipe_id}`}
              className="btn btn-primary text-captalize"
            >
              Details
            </Link>
            <a
              href={source_url}
              target="_blank"
              re="noopper noreferrer"
              className="btn btn-success mx-2 text-capitalize"
            >
              Recipe Url
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
