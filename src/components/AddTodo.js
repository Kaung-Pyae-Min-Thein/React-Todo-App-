import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    
    
    
    
      this.setState({
        content: e.target.value,
      });
    
  };
  handleSubmit = (e) => {
      
    e.preventDefault();
    console.log("Submit State", this.state);
    this.props.tdo(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="box">Enter</label>
          <input
            id="box"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
