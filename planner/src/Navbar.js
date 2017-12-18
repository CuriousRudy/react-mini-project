import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="breadcrumb has-bullet-separator is-medium is-right"
        aria-label="breadcrumbs"
      >
        <div className="container">
          <ul>
            <li>
              <a href="#">Hey there</a>
            </li>
            <li>
              <a href="#">How you</a>
            </li>
            <li>
              <a href="#">I'm good</a>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Sign In
              </a>
            </li>
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.props.handleChange}
                  className="input"
                  type="text"
                  placeholder="Log in here..."
                  value={this.props.thisUser}
                />
              </div>
              <button onClick={this.props.logIn} className="button is-info">
                Log In
              </button>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
