import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello"
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  // }

  clickHandler = () => {
    this.setState({
      message: 'GoodBye'
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* Method1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click and change Hello</button> */}
        {/* Method2 */}
        {/* <button onClick={() => this.clickHandler()}>Click and change Hello</button> */}
        {/* Method3 */}
        <button onClick={this.clickHandler}>Click and change Hello</button>
      </div>
    )
  }
}

export default EventBind