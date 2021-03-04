import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";


var course = [{ name: "Angular", educator: "Rob" },
{ name: "ReactJS", educator: "John" },
{ name: "Ajax", educator: "Mack" }
];
class Testcase1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coursedata: course
    }
  }
  render() {
    var data = this.state.coursedata
    return (
      <React.Fragment>
        {
          data.map((userdata) => {
            return (<div>
              <h4>cource name : {userdata.name}</h4>
              <h4>educator name  : {userdata.educator}</h4>
            </div>
            )
          })
        }
        <Link to={'/links'}> Homepage </Link><br />

      </React.Fragment>
    )
  }
}
export default Testcase1;