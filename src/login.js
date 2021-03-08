import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "", password: "",
      nameError: "", passError: "", isLogin: false
    }

  }
  validateUsername = (e) => {
    this.setState({ name: e.target.value })
    if (e.target.value.length < 5) {
      this.setState({ nameError: "Name can not less than 5" })
    }
    else {
      this.setState({ nameError: "" })
    }
  }
  validatePassword = (e) => {
    this.setState({ password: e.target.value })
    if (e.target.value.length < 5) {
      this.setState({ passError: "Password can not less than 5" })
    }
    else {
      this.setState({ passError: "" })
    }
  }
  validate = (event) => {
    
    if (this.state.name.length < 5 || this.state.password.length < 5) {
      event.preventDefault();
    }
    else {
      this.setState({ isLogin: true })
    }
  }

  render() {
    return (
      <React.Fragment>
        { !this.state.isLogin ? 
        <form>

          <div className="form-group">
            <label for="name">Username:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name"
              onChange={this.validateUsername} name="name" value={this.state.name} />
            <div>{this.state.nameError}</div>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password"
              onChange={this.validatePassword} name="password" value={this.state.password} />
            <div>{this.state.passError}</div>
          </div>
          <button type="submit" onClick={this.validate} className="btn btn-primary">Login</button>

        </form>  : 
        <Redirect to='/homepage' />} 
      </React.Fragment>
    )
  }
}
export default Login;
