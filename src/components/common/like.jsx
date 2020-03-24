import React, { Component } from "react";

class Like extends Component {
  onLike(title) {
    console.log("hi", title);
  }

  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) {
      classes += "-o";
    }
    return (
      <i
        onClick={this.props.onToggle}
        style={{ cursor: "pointer" }}
        className={classes}
      />
    );
  }
}

export default Like;
