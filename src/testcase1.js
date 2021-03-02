import React from 'react';

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
      </React.Fragment>
    )
  }
}
export default Testcase1;