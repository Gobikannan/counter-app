import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("Increment Clicked", this);
  //   }

  // arrow function solves this instance issue and no need to use contructor and bind(this) to event
  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  renderCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2" style={{ fontSize: 20 }}>
          {this.renderCount()}
        </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
