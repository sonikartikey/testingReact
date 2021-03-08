import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = { logout: false }
  }

  logout = () => {
    this.setState({ logout: true })
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.logout ?
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand" onClick={this.logout}>Homepage</Link><br></br>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/view_details" className="nav-item nav-link" onClick={this.logout}>View Details</Link><br></br>
                  <Link to="/links" className="nav-item nav-link" onClick={this.logout}>Log Out</Link><br></br>  
                </div>
              </div>
            </nav>
          </div>
          :
          <Redirect to='/homepage' />
        }
      </React.Fragment>
    )
  }
}
export default Navbar;
