import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
function HomePage(props) {
  return props.user.isLoggedIn ? <div>Hello, Hello</div> : <Navigate to="/" />;
}

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, {})(HomePage);
