import React from 'react';
import Child from './child';

class Lifecycle1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "kartikey", age: 25, contact: 9929292929, num1: 23, num2: 45, sum: 0
    }
  }

  componentWillMount() {
    // alert("hello will mount")
    console.log("In WILL Mount in Lifecycle1")
    console.log("state in will mount : " + this.state.sum)
  }

  componentDidMount() {
    console.log("In DID Mount in lifecycel1")
    console.log("setstate in DID mount : " + this.state.sum)
    // setInterval(this.start, 1000);
  }

  addition = () => {
    this.setState({ sum: this.state.num1 + this.state.num2 })
    console.log("addition mei h " + this.state.sum)

  }
  render() {
    console.log("rerender" + this.state.sum)

    return (
      <React.Fragment>
        <h1>hello</h1>
        <button onClick={this.addition}>click on this do to calculation</button>
        <h3> Sum = {this.state.sum}</h3>
        {/* <Child abc = {this.state.sum +1}/> */}
      </React.Fragment>
    )
  }
}
export default Lifecycle1;