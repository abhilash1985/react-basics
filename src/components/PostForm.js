import React, { Component } from "react";
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post("https://jsonplaceholder.typicode.com/posts", this.post)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>UserID: </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
          <label>Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
          <label>Body: </label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
