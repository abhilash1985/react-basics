import React from "react";

const WithCounter = (WrappedComponent, number) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => {
        // return {count: prevState.count + props.addValue},
        return { count: prevState.count + number };
      });
      console.log(this.state.count);
    };

    render() {
      return (
        <WrappedComponent
          name="Test"
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
