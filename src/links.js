import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

class Links extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Ye Rahe Sare Links</h1>
        <Link to={'/login'}> Login Page </Link><br />
        <Link to={'/child'}> Children component </Link><br />
        <Link to={'/Parent'}> Parent component </Link><br />
        <Link to={'/FunctionalComponent'}> Functional  component </Link><br />
        <Link to={'/Axios'}> Axios component </Link><br />
        <Link to={'/IncrementCounter'}> Incremant counter component </Link><br />
        <Link to={'/Lifecycle'}> Lifecycle component </Link><br />
      </React.Fragment>
    )
  }
}
export default Links;