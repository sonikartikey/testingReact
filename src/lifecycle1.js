import React from 'react';
import Child from './child';
import { BrowserRouter, Link } from "react-router-dom";


class Lifecycle1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "kartikey", age: 25, contact: 9929292929, num1: 23, num2: 45, sum: 0, flag: false
    }
  }

  componentWillMount() {
    // alert("hello will mount")
    console.log("In WILL Mount in Lifecycle1")
    console.log("state in will mount : " + this.state.sum)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("in should component")
    console.log("props : ", nextProps, "States : ", nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("previous props", prevProps)
    console.log("previous States", prevState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("aa jao bhaiya", prevProps, prevState)
  }

  componentDidMount() {
    console.log("In DID Mount in lifecycel1")
    console.log("setstate in DID mount : " + this.state.sum)
    // setInterval(this.start, 1000);
  }

  addition = () => {
    this.setState({ sum: this.state.num1 + this.state.num2, flag: true }, this.onSuccess)
  }
  onSuccess = () => {
    console.log("addition mei h " + this.state.sum)
  }

  render() {
    console.log("rerender" + this.state.sum)
    return (
      <React.Fragment>
        {!this.state.flag ?
          <div>
            <h1>hello</h1>
            <button onClick={this.addition}>click on this do to calculation</button>
            <h3> Sum = {this.state.sum}</h3>
            <Link to={'/links'}> Homepage </Link><br />
          </div>
          :
          <React.Fragment>
            <Child abc={this.state.sum} />
            <Link to={'/links'}> Homepage </Link><br />
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}
export default Lifecycle1;