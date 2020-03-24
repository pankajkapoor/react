import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  // handleIncrement = () => {
  //   // this.state.count++;
  //   // this.setState("count");
  //   // this.state.count++;
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmouont");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        <div className="row">
          <div className="m-2"> {this.props.children}</div>
          <div className="col-1">
            <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-0">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="col-0">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus"></i>
            </button>
          </div>
          <div className="col-0">
            <button
              onClick={() => this.props.onDelete(this.props.counter)}
              className="btn btn-danger btn-sm m-2"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
