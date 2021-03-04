import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

// const Test2=()=> <h1>hello </h1>


function Test3 (props){
  return(
    <React.Fragment>
      <h2>HEllo Functional component {props.new}</h2>
      <Link to={'/links'}> Homepage </Link><br />
      
    </React.Fragment>
  )
}
export default Test3;
