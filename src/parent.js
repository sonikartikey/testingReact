import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";


const a = "Kartikey"
const age = 23
class Parent extends React.Component {
  scream = () => {
    if (age >= 18) {
      alert(a+ " "+'Your vote registered!!!!!');
    }
    else{
      alert('you can not vote!');
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Please click on the button to vote</h1>
        <button onClick={this.scream}>click here to vote</button>
        <Link to={'/links'}> Homepage </Link><br />
        
      </React.Fragment>
    )
  }
}

export default Parent;