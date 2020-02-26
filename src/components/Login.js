import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authSelectors, authOperations } from '../state/ducks/auth';

class Login extends Component {
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { loginUser } = this.props;
    const { email, password } = this.state;

    loginUser(email, password);
  };

  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
          <React.Fragment>
            <input
              placeholder="email"
              onChange={this.handleEmailChange}
            />
            <input
              placeholder="email"
              onChange={this.handlePasswordChange}
              type="password"
            />
    
            {loginError && (
                <div>Incorrect email or password.</div>
            )}
            <button
              onClick={this.handleSubmit}
            >
              Sign In
            </button>
        </React.Fragment>
      );
    }
  }
}

const mapDispatchToProps = {
    loginUser: authOperations.loginUser,
};

function mapStateToProps(appState) {
  return {
    isLoggingIn: authSelectors.selectIsLoggingIn(appState),
    loginError: authSelectors.selectLoginError(appState),
    isAuthenticated: authSelectors.selectIsAuthenticated(appState),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);