import React, { Component } from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
    }
  }
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>
          {this.props.name} Incremented Count {count} times
        </button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter, 5);
