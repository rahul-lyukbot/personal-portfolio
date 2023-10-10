import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logoport.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import twiimage from "../assets/img/twiblue.svg";
import gitimage from "../assets/img/gitwhite.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rahul-saini-96a439246/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://twitter.com/rahul_sain14874">
                <img src={twiimage} alt="Icon" />
              </a>
              <a href="https://github.com/rahul-lyukbot">
                <img src={gitimage} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
