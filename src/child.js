import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

class Child extends React.Component {
  movieName = 'Harry Potter';
  printMovie = () => {
    return (
      <h4> My favourite movie is: <span className="text-info">
        {this.movieName}</span>
      </h4>
    );
  };
  //lifecycle methods 

  shouldComponentUpdate(nextProps, nextState) {
    console.log("props : ", nextProps, "States : ", nextState)
    return false
  }

  componentWillMount() {
    console.log("In WILL Mount in child , props : " + this.props.abc)
  }

  componentDidMount() {
    console.log("In DID Mount in child props : " + this.props.abc)
  }

  render() {

    if (this.props.value == 3) {
      return (
        <div>
          {this.printMovie()}
          <Link to={'/links'}> Homepage </Link><br />
        </div>

      )
    }
    else {
      return (
        <React.Fragment>
          <h1>you are not 3 and sum from lifecycle componend is {this.props.abc}</h1>
          <Link to={'/links'}> Homepage </Link><br />
        </React.Fragment>

      )
    }
  }
}
export default Child;