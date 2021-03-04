import React from 'react';
import Child from './child';
import { BrowserRouter, Link } from "react-router-dom";


class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  incrementcount = () => {
    this.setState({counter : this.state.counter+1})
  }
  render() {
    return (
      <React.Fragment>
        <h1>Increment counter</h1>
        <button onClick={this.incrementcount}> click to Increment value by 1</button>
        <h3>Now the value of the counter is {this.state.counter}</h3>
        <Child value = {this.state.counter} />
        <Link to={'/links'}> Homepage </Link><br />

      </React.Fragment>
    )
  }
}
export default Test;