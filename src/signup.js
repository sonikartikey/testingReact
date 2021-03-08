import React from 'react';

class Signup extends React.Component {
  constructor() {
    super()
    this.state = { email: "", password: "" ,cnfpassword : "", contactno: "",
                 emailError : "", passError:"",cnfpassError:"", contactnoError:"" }

  }
  validateEmail = (e) => {
    this.setState({ email: e.target.value })
    if (e.target.value.length < 5) {
      this.setState({emailError: "Email can not less than 8"})
    }
    else{
      this.setState({emailError: ""})
    }
  }
  validatePassword = (e) => {
    this.setState({ password: e.target.value })
    if (e.target.value.length < 5) {
      this.setState({passError: "Password can not less than 5"})
    }
    else{
      this.setState({passError: ""})
    }
  }

  validateCnfPassword = (e) => {
    this.setState({ cnfpassword: e.target.value })
    if (e.target.value.length < 5 || (this.state.password != e.target.value)) {
      this.setState({cnfpassError: "Cnf Password does not match"})
    }
    else{
      this.setState({cnfpassError: ""})
    }
  }
  validateContact = (e) => {
    this.setState({ contactno: e.target.value })
    if (e.target.value.length != 10) {
      this.setState({contactnoError: "Contact Number should be of 10 Digit"})
    }
    else{
      this.setState({contactnoError: ""})
    }
  }

  validate = event => {
    if (this.state.email.length < 5 || this.state.password.length < 5 ) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <React.Fragment>
        <form>

          <div classname="form-group">
            <label for="name">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email"
              onChange={this.validateEmail} name="Email" value={this.state.email} />
              <div>{this.state.emailError}</div>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"
              onChange={this.validatePassword} name="password" value={this.state.password} />
              <div>{this.state.passError}</div>
          </div>
          <div className="form-group">
            <label for="pwd">Confirm Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"
              onChange={this.validateCnfPassword} name="password" value={this.state.cnfpassword} />
              <div>{this.state.cnfpassError}</div>
          </div>
          <div className="form-group">
            <label for="pwd">Contact Number</label>
            <input type="digit" className="form-control" id="pwd" placeholder="Enter Contact Number"
              onChange={this.validateContact} name="password" value={this.state.contactno} />
              <div>{this.state.contactnoError}</div>
          </div>
          <button type="submit" onClick = {this.validate} className="btn btn-primary">Sign up </button>

        </form>
      </React.Fragment>
    )
  }
}
export default Signup;
