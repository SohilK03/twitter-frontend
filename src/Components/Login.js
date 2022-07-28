import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import hero_img from "../Assets/Login/hero_img.png";
import logo from "../Assets/logo.svg";
import google from "../Assets/Login/google.svg";
import apple from "../Assets/Login/apple.svg";
export default function Login() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 12, order: "last" }}
          md={{ span: 7, order: "first" }}
          style={{ background: `url(${hero_img})` }}
          className="d-flex align-items-center justify-content-center m-0 p-0"
        >
          <Image src={logo} alt="logo-img" width="50%" />
        </Col>
        <Col
          className="bg-dark text-center py-5 px-sm-3 px-md-5"
          sm={{ span: 12, order: "first" }}
          md={{ span: 5, order: "first" }}
        >
          <Container>
            <Row>
              <Image src={logo} width="6.5%" />
            </Row>
            <Row>
              <h1
                className="text-light  py-4"
                style={{
                  fontSize: "2.6rem",
                  fontWeight: "700",
                  fontFamily: `TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
                }}
              >
                Happening Now
              </h1>
            </Row>
            <Row>
              <h3
                className="text-light pb-3"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  fontFamily: `TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
                }}
              >
                Join Twitter today.
              </h3>
            </Row>
            <Row className="w-sm-100 w-md-65">
              <Button
                variant="light"
                className="rounded-pill btn-lg w-100 mb-1 d-flex align-items-center justify-content-center"
              >
                <Image src={google} width="30px" className="mr-1" />
                Sign up with Google
              </Button>
            </Row>
            <Row className="w-sm-100 w-md-65">
              <Button
                variant="light"
                className="rounded-pill btn-lg w-100  d-flex align-items-center justify-content-center"
              >
                <Image src={apple} width="30px" className="mr-1" />
                Sign up with Apple
              </Button>
            </Row>
            <Row className="d-flex text-light w-sm-100 w-md-65 align-items-center justify-content-center">
              <hr style={{ width: "40%" }} />
              or
              <hr style={{ width: "40%" }} />
            </Row>
            <Row className="w-sm-100 w-md-65">
              <Button
                variant="primary"
                className="rounded-pill btn-lg w-100  mb-1"
              >
                Sign up with Phone or Email
              </Button>
              <p style={{ fontSize: "0.8rem" }} className="text-gray">
                By signing up, you agree to the
                <span className="text-primary"> Terms of Service</span> and
                <span className="text-primary">Privacy Policy</span>, including
                <span className="text-primary"> Cookie Use.</span>
              </p>
            </Row>
            <Row className="w-sm-100 w-md-65">
              <Col xs={12} className="m-0 p-0">
                <h5 className="text-light">Already Have an account ?</h5>
              </Col>
              <Col xs={12} className=" m-0 p-0">
                <Button
                  variant="outline-light"
                  className="rounded-pill btn-lg w-100"
                >
                  Sign in
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
