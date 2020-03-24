import React, { Component } from "react";

class Like extends Component {
  state = {
    like: false
  };

  onLike() {
    console.log("hi");
  }

  render() {
    return <i className="fa fa-heart-o" onClick={this.onLike} />;
  }
}

export default Like;
