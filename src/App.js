import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log(`App  - constructor`);
    this.state.something =
      "States can be defined here this is the right place to do so";
  }

  componentDidMount() {
    // Ajax call
    console.log("App - Mounted");
  }

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counter => {
    let { counters } = this.state;
    counters = counters.filter(item => item.id !== counter.id);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = this.state.counters;
    let index = counters.indexOf(counter);
    counters[index].value = counters[index].value + 1;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = this.state.counters;
    let index = counters.indexOf(counter);
    counters[index].value = counters[index].value - 1;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(v => v.value > 0).length}
        />
        <main role="main" className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
