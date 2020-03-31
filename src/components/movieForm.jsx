import React, { Component } from "react";

const MovieForm = props => {
  return (
    <div>
      <h1>Movie Form {props.match.params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => props.history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
