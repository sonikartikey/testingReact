import React from 'react';
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
  componentWillMount = () => {
    console.log("In WILL Mount in child , props : " + this.props.abc )
  }

  componentDidMount = () => {
    console.log("In DID Mount in child props : " +  this.props.abc)
  }

  render() {
    if (this.props.value == 3) {
      return (
        <div>
          {this.printMovie()}
        </div>
      )
    }
    else {
      return (
      <h1>you are not 3 and sum from lifecycle is {this.props.abc}</h1>
      )
    }
  }
}
export default Child;