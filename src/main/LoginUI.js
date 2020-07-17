import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function LoginUI({ loggedIn, onLogin }) {
  const location = useLocation();

  onLogin();

  if (loggedIn) {
    return <Nav.Link href={"/callback?logout=/"}>Logout</Nav.Link>;
  }

  return (
    <Nav.Link href={"/market/member/login?next=" + location.pathname}>
      Login
    </Nav.Link>
  );
}

LoginUI.propTypes = {
  loggedIn: PropTypes.bool,
  loginName: PropTypes.string,
  onLogin: PropTypes.func,
};
